export type EffectDuration = "PERMANENT" | "UNTIL_END_OF_TURN" | "CUSTOM";

export interface IEffect {
    apply: () => void;           // apply the effect
    remove?: () => void;         // optional, only needed for temporary effects
    duration: EffectDuration;    // tells the engine how to handle it
    description?: string;        // optional logging
}