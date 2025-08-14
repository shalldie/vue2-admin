export class DragMove {
    enable = false;

    /** 拖动起始位置 */
    point = { x: 0, y: 0 };
    // 初始偏移量
    offset = { x: 0, y: 0 };

    /**
     *
     *
     * @param {{x:number;y:number}} offset
     * @memberof DragMove
     */
    onChange = offset => {
        console.log(offset);
    };

    /**
     * Creates an instance of DragMove.
     * @param {(offset: {x: number;y: number;}) => void} onChange
     * @memberof DragMove
     */
    constructor(onChange) {
        this.onChange = onChange;
        document.body.addEventListener('mousemove', this.onMouseMove);
        document.body.addEventListener('mouseup', this.onMouseUp);
    }

    /**
     * @param {MouseEvent} ev
     * @memberof DragMove
     */
    start(ev, offset) {
        this.point = {
            x: ev.clientX,
            y: ev.clientY
        };
        this.offset = offset;
        this.enable = true;
    }

    /**
     * @param {MouseEvent} ev
     * @memberof DragMove
     */
    onMouseMove = ev => {
        if (!this.enable) {
            return;
        }
        this.onChange({
            x: ev.clientX - this.point.x + this.offset.x,
            y: ev.clientY - this.point.y + this.offset.y
        });
    };

    onMouseUp = () => {
        this.enable = false;
    };

    dispose() {
        document.body.removeEventListener('mousemove', this.onMouseMove);
        document.body.removeEventListener('mouseup', this.onMouseUp);
    }
}
