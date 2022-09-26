class ToastClass {
  constructor(name) {
    this.name = name;
  }
  show(txt) {
    const toast = document.createElement("div");
    toast.innerText = txt;
    toast.style.cssText = `
        min-width: 250px; 
        margin-left: -125px; 
        background-color: #333; 
        color: #fff; 
        text-align: center;
        border-radius: 2px;
        padding: 16px;
        position: fixed;
        z-index: 1;
        left: 50%; 
        bottom: 30px;
      `;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 3000);
  }
}

const toast = new ToastClass();
