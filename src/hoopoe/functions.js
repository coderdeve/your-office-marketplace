const generateID = (len, group) => {
    const s = (group) => {
        var text = "",
            possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < group; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
    var id = s(group);
    if (len > 1) {
        for (let n = 0; n < len; n++) {
            id += "-" + s(group);
        }
    }
    return id;
}

class HoopoeToast {
    constructor() {

        let self = this;
        self._toasts = [];
        self._container = null;

        const _Toast = (options) => {
            var timeout = null, ID = 'hoopoe-toast-' + generateID(5, 4), toast = document.createElement('div'), btn = document.createElement('button');

            toast.id = ID;
            toast.classList = 'hoopoe-toast fixed flex frontn tran-all-lin fonts14 aic';
            toast.innerHTML = options.html || "Hoopoe Toast";

            btn.className = "fontb fonts15";
            btn.textContent = options.btnTxt || "موافق";
            btn.addEventListener("click", () => { _dismiss(); });

            toast.appendChild(btn);
            self._container.appendChild(toast);
            setTimeout(() => {
                toast.classList.add("hoopoe-toast-visible");
                self.arrangeToasts(() => {
                    timeout = setTimeout(() => {
                        _dismiss();
                    }, (options.time || 5) * 1000);
                });
            }, 50);

            const _dismiss = () => {
                timeout && clearTimeout(timeout);
                toast.classList.remove('hoopoe-toast-visible');
                toast.classList.add('hoopoe-toast-hidden');
                timeout = setTimeout(() => {
                    document.getElementById(ID).parentNode.removeChild(document.getElementById(ID));
                }, 1000);
            };
        };

        self.createContainer = () => {
            var container = document.createElement('div');
            container.id = 'toast-container';
            document.body.appendChild(container);
            self._container = container;
        };

        self.moveToast = (toast, bottom) => {
            toast.style.bottom = bottom + 'px';
        };

        self.arrangeToasts = (callback) => {
            var toasts = document.querySelectorAll(".hoopoe-toast"),
                bottom = 20, i = toasts.length;
            while (i--) {
                toasts[i].classList.add('n-' + i);
                self.moveToast(toasts[i], bottom);
                bottom += parseInt(getComputedStyle(toasts[i]).height.replace("px")) + 30;
            }
            callback && callback();
        };

        self.show = (options) => {
            self._container == null && self.createContainer();
            _Toast(options);
        };

        self._dismisAll = (dis) => {
            var toasts = document.querySelectorAll(".hoopoe-toast");
            var i = toasts.length;
            while (i--) {
                toasts[i].parentNode.removeChild(toasts[i]);
                _Toast(dis);
            }
        };
    }
}

const Toast = new HoopoeToast();

export default {
    generateID,
    Toast
}