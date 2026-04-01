export const reflexTextOverrides: ReadonlyArray<readonly [string, string]> = [
  // ["Simulation and QA for critical", "Your replacement heading"],
];

export function applyReflexTextOverrides(html: string) {
  return reflexTextOverrides.reduce(
    (updatedHtml, [from, to]) => updatedHtml.split(from).join(to),
    html,
  );
}
