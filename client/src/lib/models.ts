export const DEFAULT_AI_MODEL = "openai/gpt-oss-120b" as const;

export type AIModelId = typeof DEFAULT_AI_MODEL;

export function getDefaultAiModel(): AIModelId {
  return DEFAULT_AI_MODEL;
}
