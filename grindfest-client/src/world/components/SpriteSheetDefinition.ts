import {Direction} from "../../infrastructure/network/Messages";

export interface SpriteSheetDefinition {
    asset: string;
    imageAsset: HTMLImageElement;
    frameWidth: number;
    frameHeight: number;

    scale: number

    defaultAction: string;

    actions: SpriteSheetAction[];

    actionsByName: Map<string, SpriteSheetAction>;
}

export enum WrapMode {
    Once = 0,
    Loop = 1,
    ClampForever = 2,
}

export interface SpriteSheetAction {
    name: string;
    wrapMode: WrapMode;
    priority: number;
    animations: SpriteSheetAnimation[];

    duration: number;
    animationsByDirection: Map<Direction, SpriteSheetAnimation>;

    height: number;
}



interface SpriteSheetAnimation {
    direction: number;
    frames: number[];
}
