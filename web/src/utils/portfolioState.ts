import type { Portfolio } from "@/types";

export const SLOW_AFTER_MS = 2 * 60 * 1000;
export const MAX_FETCH_FAILURES = 3;

export type PortfolioViewState =
  | { kind: "generating" }
  | { kind: "slow" }
  | { kind: "stale" }
  | { kind: "failed"; reason?: string }
  | { kind: "complete" }
  | { kind: "unreachable" };

export interface PortfolioResponseBody {
  status?: string;
  stale?: boolean;
  error?: string;
  portfolio?: Partial<Pick<Portfolio, "generation_status" | "generation_error" | "status_changed_at">> | null;
}

// Skeleton: the types exist so the tests can run, but the behaviour is not written yet.
export function waitedMs(_body: PortfolioResponseBody, _nowMs: number): number {
  return 0;
}

export function derivePortfolioState(_body: PortfolioResponseBody, _nowMs: number): PortfolioViewState {
  return { kind: "generating" };
}

export const isInProgress = (_state: PortfolioViewState): boolean => false;

export const canRetry = (_state: PortfolioViewState): boolean => false;

export function retryErrorMessage(_httpStatus?: number): string {
  return "";
}
