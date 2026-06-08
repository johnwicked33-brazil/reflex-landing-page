import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const CONTACT_METHODS = ["Ligação", "WhatsApp", "Email"] as const;

type ContactMethod = (typeof CONTACT_METHODS)[number];

type EnterpriseLeadRequestBody = {
  companyName?: unknown;
  website?: unknown;
  contactName?: unknown;
  phone?: unknown;
  email?: unknown;
  preferredContact?: unknown;
};

type EnterpriseLead = {
  companyName: string;
  website: string;
  contactName: string;
  phone: string;
  email: string;
  preferredContact: ContactMethod;
};

type LeadValidationResult =
  | { error: string }
  | { lead: EnterpriseLead };

function cleanString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function cleanDigits(value: string) {
  return value.replace(/\D/g, "");
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidWebsite(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function isContactMethod(value: string): value is ContactMethod {
  return CONTACT_METHODS.includes(value as ContactMethod);
}

function jsonError(error: string, status = 400) {
  return NextResponse.json({ error }, { status });
}

function validateLead(body: EnterpriseLeadRequestBody | null): LeadValidationResult {
  if (!body) {
    return { error: "Dados do cadastro são obrigatórios." };
  }

  const lead = {
    companyName: cleanString(body.companyName),
    website: cleanString(body.website),
    contactName: cleanString(body.contactName),
    phone: cleanString(body.phone),
    email: cleanString(body.email),
    preferredContact: cleanString(body.preferredContact),
  };

  if (
    !lead.companyName ||
    !lead.website ||
    !lead.contactName ||
    !lead.phone ||
    !lead.email ||
    !lead.preferredContact
  ) {
    return { error: "Preencha todos os campos obrigatórios." };
  }

  if (!isValidWebsite(lead.website)) {
    return { error: "Informe um site válido começando com http:// ou https://." };
  }

  if (!isValidEmail(lead.email)) {
    return { error: "Informe um email válido." };
  }

  const phoneDigits = cleanDigits(lead.phone);

  if (phoneDigits.length < 8 || phoneDigits.length > 15) {
    return { error: "Informe um telefone válido." };
  }

  if (!isContactMethod(lead.preferredContact)) {
    return { error: "Meio preferido de contato inválido." };
  }

  return {
    lead: {
      ...lead,
      preferredContact: lead.preferredContact,
    },
  };
}

export async function POST(request: Request) {
  const webhookUrl = process.env.ENTERPRISE_LEAD_WEBHOOK_URL;

  if (!webhookUrl) {
    return jsonError("ENTERPRISE_LEAD_WEBHOOK_URL não está configurada.", 500);
  }

  const body = (await request.json().catch(() => null)) as
    | EnterpriseLeadRequestBody
    | null;
  const result = validateLead(body);

  if ("error" in result) {
    return jsonError(result.error);
  }

  const payload = {
    ...result.lead,
    source: "rebound-landing-page",
    plan: "enterprise",
    submittedAt: new Date().toISOString(),
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Webhook rejected the enterprise lead.");
    }

    return NextResponse.json({ ok: true });
  } catch {
    return jsonError(
      "Não foi possível enviar o cadastro agora. Tente novamente em instantes.",
      502,
    );
  }
}
