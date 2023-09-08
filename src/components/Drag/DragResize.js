export class DragResize {
    enable = false;

    /** 拖动起始位置 */
    point = { x: 0, y: 0 };
    /** 初始宽高 */
    size = { width: 0, height: 0 };

    /**
     *
     *
     * @param {{width:number;height:number}} size
     * @memberof DragResize
     */
    onChange = size => {
        console.log(size);
    };

    /**
     * Creates an instance of DragResize.
     * @param {(offset: {width: number;height: number;}) => void} onChange
     * @memberof DragResize
     */
    constructor(onChange) {
        this.onChange = onChange;
        document.body.addEventListener('mousemove', this.onMouseMove);
        document.body.addEventListener('mouseup', this.onMouseUp);
    }

    /**
     * @param {(size: {width: number;height: number;}) => void} size
     * @param {MouseEvent} ev
     * @memberof DragResize
     */
    start(size, ev) {
        this.size = size;
        this.point = {
            x: ev.clientX,
            y: ev.clientY
        };
        console.log(this.point);
        this.enable = true;
    }

    /**
     * @param {MouseEvent} ev
     * @memberof DragResize
     */
    onMouseMove = ev => {
        if (!this.enable) {
            return;
        }
        const offset = {
            x: ev.clientX - this.point.x,
            y: ev.clientY - this.point.y
        };
        this.onChange({
            width: this.size.width + offset.x,
            height: this.size.height + offset.y
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
