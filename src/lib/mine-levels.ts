// The live smart-jacket worker created in TelemetryContext when an ESP32 jacket connects
export const LIVE_JACKET_WORKER_ID = 'W-ESP32-LIVE';

// Which mine level each worker is on (0 = surface, 3 = deepest).
// Shared by the 3D map and the "Workers near you" list.
export const WORKER_LEVEL_MAP: Record<string, number> = {
  // Live jacket packets report the Shaft 3 zone
  [LIVE_JACKET_WORKER_ID]: 3,
};

/** Level for a worker; unknown IDs are spread across levels by list position */
export function getWorkerLevel(workerId: string, index: number): number {
  return WORKER_LEVEL_MAP[workerId] ?? index % 4;
}

// The logged-in worker's own jacket
export const MY_WORKER_ID = LIVE_JACKET_WORKER_ID;
