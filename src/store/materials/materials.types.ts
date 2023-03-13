export type MaterialsState = {
    form: MaterialsForm
}

export type MaterialsForm = {
    "Frame Material": frameMaterial | null,
    'Glass Type': glassType | null,
    'Frame Color': frameColor | null,
}

type frameMaterial = "Wood" | "Aluminum" | "Vinyl" | "Fiberglass";

type glassType = "Clear" | "Frosted" | "Tinted" | "Low-E";

type frameColor = "White" | "Black" | "Bronze" | "Silver"