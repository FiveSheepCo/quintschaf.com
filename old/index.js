class Animator {
  constructor(el) {
    this.el = el;
    this.el.style.perspective = `${el.getBoundingClientRect().width}px`;
    this.el.style.perspectiveOrigin = "center";
    this.el.style.transition = 'all .25s ease-in-out';
  }

  setHook() {
    const fn = this.handleEv.bind(this);
    document.addEventListener("mousemove", fn);
  }

  handleEv(e) {
    const [gX, gY] = [e.pageX, e.pageY];
    const bounds = this.el.getBoundingClientRect();
    const [cX, cY] = [
      bounds.left + bounds.width / 2,
      bounds.top + bounds.height / 2,
    ];
    const radX = Math.atan2(gX - cX, cY);
    const radY = Math.atan2(cY, gY - cY);
    const degX = (radX * (180 / Math.PI) * -0.5);
    const degY = (radY * (180 / Math.PI) * -0.5);
    if (this.el.style.transition != 'none') {
      setTimeout(() => {
        this.el.style.transition = 'none';
      }, 250);
    }
    console.log(degY);
    this.el.style.transform = `rotateY(${degX}deg) rotateX(${degY / 2}deg)`;
  }

  static hook(el) {
    const anim = new Animator(el);
    anim.setHook();
  }
}
