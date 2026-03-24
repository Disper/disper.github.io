import { useEffect, useState } from "react";
import type { ArmiesStatsPayload } from "../types";

type State =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "ok"; data: ArmiesStatsPayload };

export function useArmiesStats(): State {
  const [state, setState] = useState<State>({ status: "loading" });

  useEffect(() => {
    let cancelled = false;
    fetch("/armiesStats.json")
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json() as Promise<ArmiesStatsPayload>;
      })
      .then((data) => {
        if (!cancelled) setState({ status: "ok", data });
      })
      .catch((e: unknown) => {
        if (!cancelled)
          setState({
            status: "error",
            message: e instanceof Error ? e.message : "Failed to load data",
          });
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
