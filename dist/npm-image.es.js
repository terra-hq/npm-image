import { ref as d, onMounted as y, resolveDirective as f, openBlock as l, createElementBlock as s, Fragment as w, withDirectives as A, normalizeClass as c, normalizeStyle as m, createCommentVNode as u } from "vue";
const b = ["alt", "width", "height", "innerHTML"], v = ["src", "alt", "width", "height", "innerHTML"], z = {
  __name: "TImage",
  props: {
    isLazy: {
      type: Boolean,
      default: !1
    },
    image: {
      type: String
    },
    className: {
      type: String
    },
    width: {
      type: String | Number
    },
    height: {
      type: String | Number
    },
    showAspectRatio: {
      type: Boolean | String,
      default: !1
    },
    dataAttributes: {
      type: Boolean || Array,
      default: !1
    }
  },
  setup(t) {
    const e = t, i = d("");
    y(() => {
      e.showAspectRatio && e.width && e.height && (i.value = `aspect-ratio: ${e.width} / ${e.height}`);
    });
    const r = () => e.alt ? e.alt : e.image.split("/").pop(), h = () => {
      var a = "data-tos";
      return e.dataAttributes && e.dataAttributes.length > 0 && e.dataAttributes.forEach((o) => {
        Object.entries(o).forEach(([n, g]) => {
          a = `data-${n}="${g}"`;
        });
      }), a;
    };
    return (a, o) => {
      const n = f("lazy");
      return l(), s(w, null, [
        t.isLazy ? A((l(), s("img", {
          key: 0,
          class: c(t.className),
          alt: r(t.image),
          width: t.width,
          height: t.height,
          style: m(i.value),
          innerHTML: h()
        }, null, 14, b)), [
          [n, t.image]
        ]) : u("", !0),
        t.isLazy ? u("", !0) : (l(), s("img", {
          key: 1,
          class: c(t.className),
          src: t.image,
          alt: r(t.image),
          width: t.width,
          height: t.height,
          style: m(i.value),
          innerHTML: h()
        }, null, 14, v))
      ], 64);
    };
  }
}, N = {
  install: (t, e) => {
    t.component("TImage", z);
  }
};
export {
  N as default
};
