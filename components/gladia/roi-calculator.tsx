"use client";

import { useMemo, useState } from "react";

import styles from "./gladia.module.css";

type RoiCalculatorProps = {
  assumptions: string[];
};

function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    maximumFractionDigits: 0,
    style: "currency",
  }).format(value);
}

function clampNumber(value: number, min: number, max: number) {
  if (Number.isNaN(value)) {
    return min;
  }

  return Math.min(Math.max(value, min), max);
}

export function RoiCalculator({ assumptions }: RoiCalculatorProps) {
  const [idleLeads, setIdleLeads] = useState(600);
  const [averageTicket, setAverageTicket] = useState(1200);
  const [recoveryRate, setRecoveryRate] = useState(3);

  const result = useMemo(() => {
    const recoveredDeals = Math.max(0, Math.round(idleLeads * (recoveryRate / 100)));
    const recoveredRevenue = recoveredDeals * averageTicket;
    const basicBreakEven = averageTicket > 0 ? Math.ceil(197 / averageTicket) : 0;
    const proBreakEven = averageTicket > 0 ? Math.ceil(497 / averageTicket) : 0;

    return {
      basicBreakEven,
      proBreakEven,
      recoveredDeals,
      recoveredRevenue,
    };
  }, [averageTicket, idleLeads, recoveryRate]);

  return (
    <div className={styles.roiCalculator}>
      <div className={styles.roiControls}>
        <label className={styles.roiField}>
          <span>Leads parados por mês</span>
          <input
            max={20000}
            min={0}
            onChange={(event) =>
              setIdleLeads(clampNumber(Number(event.target.value), 0, 20000))
            }
            type="number"
            value={idleLeads}
          />
        </label>

        <label className={styles.roiField}>
          <span>Ticket médio</span>
          <input
            max={100000}
            min={0}
            onChange={(event) =>
              setAverageTicket(clampNumber(Number(event.target.value), 0, 100000))
            }
            type="number"
            value={averageTicket}
          />
        </label>

        <label className={styles.roiField}>
          <span>Conversões recuperadas</span>
          <input
            max={30}
            min={0}
            onChange={(event) =>
              setRecoveryRate(clampNumber(Number(event.target.value), 0, 30))
            }
            type="range"
            value={recoveryRate}
          />
          <strong>{recoveryRate}%</strong>
        </label>
      </div>

      <div className={styles.roiResultCard}>
        <span className={styles.roiResultLabel}>Receita potencial recuperada</span>
        <strong className={styles.roiResultValue}>
          {formatCurrency(result.recoveredRevenue)}
        </strong>
        <p>
          Com essa simulação, {result.recoveredDeals} conversões voltariam para o
          funil. Um plano Basic se paga com {result.basicBreakEven || 1} venda e
          o Pro com {result.proBreakEven || 1} venda nesse ticket.
        </p>
      </div>

      <ul className={styles.roiAssumptions}>
        {assumptions.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
