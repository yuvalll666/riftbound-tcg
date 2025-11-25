export interface IScheduledEffect {
    apply: () => void;      // run when the effect starts
    remove: () => void;     // run when the effect expires
    description?: string;   // optional for logging
}