import Component from "../../infrastructure/world/Component";

export class Zone {
    id: number;
}

export default class Zoned extends Component {
    public actorId: number;
    public zone: Zone;
    public zoneId: number;

    constructor(zoneId) {
        super();
        this.zoneId = zoneId;
    }

}
