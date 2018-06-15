export enum Direction  {
    South = 0,
    West = 1,
    North = 2,
    East = 3,
}
export enum MessageId {
    CMSG_LOGIN_REQUEST = 1,
    SMSG_LOGIN_RESPONSE = 2,
    SMSG_ENTER_ZONE = 3,
    SMSG_ACTOR_ENTER_ZONE = 4,
    SMSG_ACTOR_MOVE = 5,
    CMSG_GAME_READY = 6,
    SMSG_ACTOR_LEAVE_ZONE = 7,
    CMSG_MOVE_REQUEST = 8,
}

export enum LoginStatus  {
    OK = 1,
    InvalidCredentials = 2,
    AlreadyLoggedIn = 3,
}
export interface ServerActorMove extends Message {
    id: MessageId.SMSG_ACTOR_MOVE
    actorId: number
    direction: number
}

export interface ClientMovementRequest extends Message {
    id: MessageId.CMSG_MOVE_REQUEST
    direction: number
}

export interface ClientGameReady extends Message {
    id: MessageId.CMSG_GAME_READY;
}

export interface ServerEnterZone extends Message {
    id: MessageId.SMSG_ENTER_ZONE;
    zoneId: number;
    //zoneType: ZoneType; // Preset | Generated
    myActorId: number;
}

export interface ServerActorLeaveZone extends Message {
    id: MessageId.SMSG_ACTOR_LEAVE_ZONE;
    actorId: number;
}

export interface ServerActorEnterZone extends Message {
    id: MessageId.SMSG_ACTOR_ENTER_ZONE;
    zoneId: number;
    actorId: number;
    x: number;
    y: number;
}

export interface ServerActorMove extends Message {
    id: MessageId.SMSG_ACTOR_MOVE;
    actorId: number;
    direction: number;

}

export interface ServerLoginResponse extends Message {
    id: MessageId.SMSG_LOGIN_RESPONSE;
    loginStatus: LoginStatus
}


export interface ClientLoginRequest {
    id: MessageId.CMSG_LOGIN_REQUEST;
    username: string;
    password: string;
}

export interface Message {
    id: number;
}