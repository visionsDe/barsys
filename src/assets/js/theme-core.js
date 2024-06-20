!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e(
        ((t =
          "undefined" != typeof globalThis ? globalThis : t || self).Motion =
          {})
      );
})(this, function (t) {
  "use strict";
  function e(t, e) {
    -1 === t.indexOf(e) && t.push(e);
  }
  function n(t, e) {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1);
  }
  const i = (t, e, n) => Math.min(Math.max(n, t), e),
    r = { duration: 0.3, delay: 0, endDelay: 0, repeat: 0, easing: "ease" },
    o = (t) => "number" == typeof t,
    s = (t) => Array.isArray(t) && !o(t[0]);
  function a(t, e) {
    return s(t)
      ? t[
          ((t, e, n) => {
            const i = e - t;
            return ((((n - t) % i) + i) % i) + t;
          })(0, t.length, e)
        ]
      : t;
  }
  const c = (t, e, n) => -n * t + n * e + t,
    l = () => {},
    u = (t) => t,
    f = (t, e, n) => (e - t == 0 ? 1 : (n - t) / (e - t));
  function h(t, e) {
    const n = t[t.length - 1];
    for (let i = 1; i <= e; i++) {
      const r = f(0, e, i);
      t.push(c(n, 1, r));
    }
  }
  function d(t) {
    const e = [0];
    return h(e, t - 1), e;
  }
  function g(t, e = d(t.length), n = u) {
    const r = t.length,
      o = r - e.length;
    return (
      o > 0 && h(e, o),
      (o) => {
        let s = 0;
        for (; s < r - 2 && !(o < e[s + 1]); s++);
        let l = i(0, 1, f(e[s], e[s + 1], o));
        return (l = a(n, s)(l)), c(t[s], t[s + 1], l);
      }
    );
  }
  const p = (t) => Array.isArray(t) && o(t[0]),
    m = (t) => "object" == typeof t && Boolean(t.createAnimation),
    y = (t) => "function" == typeof t,
    v = (t) => "string" == typeof t,
    w = (t) => 1e3 * t,
    b = (t) => t / 1e3;
  function E(t, e) {
    return e ? t * (1e3 / e) : 0;
  }
  const x = (t, e, n) =>
    (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t;
  function O(t, e, n, i) {
    if (t === e && n === i) return u;
    const r = (e) =>
      (function (t, e, n, i, r) {
        let o,
          s,
          a = 0;
        do {
          (s = e + (n - e) / 2),
            (o = x(s, i, r) - t),
            o > 0 ? (n = s) : (e = s);
        } while (Math.abs(o) > 1e-7 && ++a < 12);
        return s;
      })(e, 0, 1, t, n);
    return (t) => (0 === t || 1 === t ? t : x(r(t), e, i));
  }
  const S = {
      ease: O(0.25, 0.1, 0.25, 1),
      "ease-in": O(0.42, 0, 1, 1),
      "ease-in-out": O(0.42, 0, 0.58, 1),
      "ease-out": O(0, 0, 0.58, 1),
    },
    M = /\((.*?)\)/;
  function T(t) {
    if (y(t)) return t;
    if (p(t)) return O(...t);
    if (S[t]) return S[t];
    if (t.startsWith("steps")) {
      const e = M.exec(t);
      if (e) {
        const t = e[1].split(",");
        return (
          (t, e = "end") =>
          (n) => {
            const r =
                (n = "end" === e ? Math.min(n, 0.999) : Math.max(n, 0.001)) * t,
              o = "end" === e ? Math.floor(r) : Math.ceil(r);
            return i(0, 1, o / t);
          }
        )(parseFloat(t[0]), t[1].trim());
      }
    }
    return u;
  }
  class A {
    constructor(
      t,
      e = [0, 1],
      {
        easing: n,
        duration: i = r.duration,
        delay: o = r.delay,
        endDelay: a = r.endDelay,
        repeat: c = r.repeat,
        offset: l,
        direction: f = "normal",
      } = {}
    ) {
      if (
        ((this.startTime = null),
        (this.rate = 1),
        (this.t = 0),
        (this.cancelTimestamp = null),
        (this.easing = u),
        (this.duration = 0),
        (this.totalDuration = 0),
        (this.repeat = 0),
        (this.playState = "idle"),
        (this.finished = new Promise((t, e) => {
          (this.resolve = t), (this.reject = e);
        })),
        (n = n || r.easing),
        m(n))
      ) {
        const t = n.createAnimation(e);
        (n = t.easing), (e = t.keyframes || e), (i = t.duration || i);
      }
      (this.repeat = c),
        (this.easing = s(n) ? u : T(n)),
        this.updateDuration(i);
      const h = g(e, l, s(n) ? n.map(T) : u);
      (this.tick = (e) => {
        var n;
        let i = 0;
        (i =
          void 0 !== this.pauseTime
            ? this.pauseTime
            : (e - this.startTime) * this.rate),
          (this.t = i),
          (i /= 1e3),
          (i = Math.max(i - o, 0)),
          "finished" === this.playState &&
            void 0 === this.pauseTime &&
            (i = this.totalDuration);
        const r = i / this.duration;
        let s = Math.floor(r),
          c = r % 1;
        !c && r >= 1 && (c = 1), 1 === c && s--;
        const l = s % 2;
        ("reverse" === f ||
          ("alternate" === f && l) ||
          ("alternate-reverse" === f && !l)) &&
          (c = 1 - c);
        const u = i >= this.totalDuration ? 1 : Math.min(c, 1),
          d = h(this.easing(u));
        t(d);
        void 0 === this.pauseTime &&
        ("finished" === this.playState || i >= this.totalDuration + a)
          ? ((this.playState = "finished"),
            null === (n = this.resolve) || void 0 === n || n.call(this, d))
          : "idle" !== this.playState &&
            (this.frameRequestId = requestAnimationFrame(this.tick));
      }),
        this.play();
    }
    play() {
      const t = performance.now();
      (this.playState = "running"),
        void 0 !== this.pauseTime
          ? (this.startTime = t - this.pauseTime)
          : this.startTime || (this.startTime = t),
        (this.cancelTimestamp = this.startTime),
        (this.pauseTime = void 0),
        (this.frameRequestId = requestAnimationFrame(this.tick));
    }
    pause() {
      (this.playState = "paused"), (this.pauseTime = this.t);
    }
    finish() {
      (this.playState = "finished"), this.tick(0);
    }
    stop() {
      var t;
      (this.playState = "idle"),
        void 0 !== this.frameRequestId &&
          cancelAnimationFrame(this.frameRequestId),
        null === (t = this.reject) || void 0 === t || t.call(this, !1);
    }
    cancel() {
      this.stop(), this.tick(this.cancelTimestamp);
    }
    reverse() {
      this.rate *= -1;
    }
    commitStyles() {}
    updateDuration(t) {
      (this.duration = t), (this.totalDuration = t * (this.repeat + 1));
    }
    get currentTime() {
      return this.t;
    }
    set currentTime(t) {
      void 0 !== this.pauseTime || 0 === this.rate
        ? (this.pauseTime = t)
        : (this.startTime = performance.now() - t / this.rate);
    }
    get playbackRate() {
      return this.rate;
    }
    set playbackRate(t) {
      this.rate = t;
    }
  }
  class D {
    setAnimation(t) {
      (this.animation = t),
        null == t ||
          t.finished.then(() => this.clearAnimation()).catch(() => {});
    }
    clearAnimation() {
      this.animation = this.generator = void 0;
    }
  }
  const L = new WeakMap();
  function k(t) {
    return (
      L.has(t) || L.set(t, { transforms: [], values: new Map() }), L.get(t)
    );
  }
  const W = ["", "X", "Y", "Z"],
    j = { x: "translateX", y: "translateY", z: "translateZ" },
    R = {
      syntax: "<angle>",
      initialValue: "0deg",
      toDefaultUnit: (t) => t + "deg",
    },
    z = {
      translate: {
        syntax: "<length-percentage>",
        initialValue: "0px",
        toDefaultUnit: (t) => t + "px",
      },
      rotate: R,
      scale: { syntax: "<number>", initialValue: 1, toDefaultUnit: u },
      skew: R,
    },
    B = new Map(),
    P = (t) => `--motion-${t}`,
    V = ["x", "y", "z"];
  ["translate", "scale", "rotate", "skew"].forEach((t) => {
    W.forEach((e) => {
      V.push(t + e), B.set(P(t + e), z[t]);
    });
  });
  const $ = (t, e) => V.indexOf(t) - V.indexOf(e),
    q = new Set(V),
    C = (t) => q.has(t),
    F = (t) => t.sort($).reduce(H, "").trim(),
    H = (t, e) => `${t} ${e}(var(${P(e)}))`,
    I = (t) => t.startsWith("--"),
    U = new Set();
  const N = (t, e) => document.createElement("div").animate(t, e),
    _ = {
      cssRegisterProperty: () =>
        "undefined" != typeof CSS &&
        Object.hasOwnProperty.call(CSS, "registerProperty"),
      waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
      partialKeyframes: () => {
        try {
          N({ opacity: [1] });
        } catch (t) {
          return !1;
        }
        return !0;
      },
      finished: () =>
        Boolean(N({ opacity: [0, 1] }, { duration: 0.001 }).finished),
      linearEasing: () => {
        try {
          N({ opacity: 0 }, { easing: "linear(0, 1)" });
        } catch (t) {
          return !1;
        }
        return !0;
      },
    },
    G = {},
    Z = {};
  for (const t in _) Z[t] = () => (void 0 === G[t] && (G[t] = _[t]()), G[t]);
  const K = (t, e) =>
      y(t)
        ? Z.linearEasing()
          ? `linear(${((t, e) => {
              let n = "";
              const i = Math.round(e / 0.015);
              for (let e = 0; e < i; e++) n += t(f(0, i - 1, e)) + ", ";
              return n.substring(0, n.length - 2);
            })(t, e)})`
          : r.easing
        : p(t)
        ? X(t)
        : t,
    X = ([t, e, n, i]) => `cubic-bezier(${t}, ${e}, ${n}, ${i})`;
  const Y = (t) => (Array.isArray(t) ? t : [t]);
  function J(t) {
    return j[t] && (t = j[t]), C(t) ? P(t) : t;
  }
  const Q = {
    get: (t, e) => {
      e = J(e);
      let n = I(e) ? t.style.getPropertyValue(e) : getComputedStyle(t)[e];
      if (!n && 0 !== n) {
        const t = B.get(e);
        t && (n = t.initialValue);
      }
      return n;
    },
    set: (t, e, n) => {
      (e = J(e)), I(e) ? t.style.setProperty(e, n) : (t.style[e] = n);
    },
  };
  function tt(t, e = !0) {
    if (t && "finished" !== t.playState)
      try {
        t.stop ? t.stop() : (e && t.commitStyles(), t.cancel());
      } catch (t) {}
  }
  function et(t, e) {
    var n;
    let i = (null == e ? void 0 : e.toDefaultUnit) || u;
    const r = t[t.length - 1];
    if (v(r)) {
      const t =
        (null === (n = r.match(/(-?[\d.]+)([a-z%]*)/)) || void 0 === n
          ? void 0
          : n[2]) || "";
      t && (i = (e) => e + t);
    }
    return i;
  }
  function nt(t, n, i, a = {}, c) {
    const u = window.__MOTION_DEV_TOOLS_RECORD,
      f = !1 !== a.record && u;
    let h,
      {
        duration: d = r.duration,
        delay: g = r.delay,
        endDelay: p = r.endDelay,
        repeat: v = r.repeat,
        easing: b = r.easing,
        persist: E = !1,
        direction: x,
        offset: O,
        allowWebkitAcceleration: S = !1,
      } = a;
    const M = k(t),
      T = C(n);
    let A = Z.waapi();
    T &&
      ((t, n) => {
        j[n] && (n = j[n]);
        const { transforms: i } = k(t);
        e(i, n), (t.style.transform = F(i));
      })(t, n);
    const L = J(n),
      W = (function (t, e) {
        return t.has(e) || t.set(e, new D()), t.get(e);
      })(M.values, L),
      R = B.get(L);
    return (
      tt(W.animation, !(m(b) && W.generator) && !1 !== a.record),
      () => {
        const e = () => {
          var e, n;
          return null !==
            (n =
              null !== (e = Q.get(t, L)) && void 0 !== e
                ? e
                : null == R
                ? void 0
                : R.initialValue) && void 0 !== n
            ? n
            : 0;
        };
        let r = (function (t, e) {
          for (let n = 0; n < t.length; n++)
            null === t[n] && (t[n] = n ? t[n - 1] : e());
          return t;
        })(Y(i), e);
        const M = et(r, R);
        if (m(b)) {
          const t = b.createAnimation(r, "opacity" !== n, e, L, W);
          (b = t.easing), (r = t.keyframes || r), (d = t.duration || d);
        }
        if (
          (I(L) &&
            (Z.cssRegisterProperty()
              ? (function (t) {
                  if (!U.has(t)) {
                    U.add(t);
                    try {
                      const { syntax: e, initialValue: n } = B.has(t)
                        ? B.get(t)
                        : {};
                      CSS.registerProperty({
                        name: t,
                        inherits: !1,
                        syntax: e,
                        initialValue: n,
                      });
                    } catch (t) {}
                  }
                })(L)
              : (A = !1)),
          T && !Z.linearEasing() && (y(b) || (s(b) && b.some(y))) && (A = !1),
          A)
        ) {
          R && (r = r.map((t) => (o(t) ? R.toDefaultUnit(t) : t))),
            1 !== r.length || (Z.partialKeyframes() && !f) || r.unshift(e());
          const n = {
            delay: w(g),
            duration: w(d),
            endDelay: w(p),
            easing: s(b) ? void 0 : K(b, d),
            direction: x,
            iterations: v + 1,
            fill: "both",
          };
          (h = t.animate(
            {
              [L]: r,
              offset: O,
              easing: s(b) ? b.map((t) => K(t, d)) : void 0,
            },
            n
          )),
            h.finished ||
              (h.finished = new Promise((t, e) => {
                (h.onfinish = t), (h.oncancel = e);
              }));
          const i = r[r.length - 1];
          h.finished
            .then(() => {
              E || (Q.set(t, L, i), h.cancel());
            })
            .catch(l),
            S || (h.playbackRate = 1.000001);
        } else if (c && T)
          (r = r.map((t) => ("string" == typeof t ? parseFloat(t) : t))),
            1 === r.length && r.unshift(parseFloat(e())),
            (h = new c(
              (e) => {
                Q.set(t, L, M ? M(e) : e);
              },
              r,
              Object.assign(Object.assign({}, a), { duration: d, easing: b })
            ));
        else {
          const e = r[r.length - 1];
          Q.set(t, L, R && o(e) ? R.toDefaultUnit(e) : e);
        }
        return (
          f &&
            u(
              t,
              n,
              r,
              { duration: d, delay: g, easing: b, repeat: v, offset: O },
              "motion-one"
            ),
          W.setAnimation(h),
          h
        );
      }
    );
  }
  const it = (t, e) =>
    t[e] ? Object.assign(Object.assign({}, t), t[e]) : Object.assign({}, t);
  function rt(t, e) {
    var n;
    return (
      "string" == typeof t
        ? e
          ? ((null !== (n = e[t]) && void 0 !== n) ||
              (e[t] = document.querySelectorAll(t)),
            (t = e[t]))
          : (t = document.querySelectorAll(t))
        : t instanceof Element && (t = [t]),
      Array.from(t || [])
    );
  }
  const ot = (t) => t(),
    st = (t, e, n = r.duration) =>
      new Proxy(
        { animations: t.map(ot).filter(Boolean), duration: n, options: e },
        at
      ),
    at = {
      get: (t, e) => {
        const n = t.animations[0];
        switch (e) {
          case "duration":
            return t.duration;
          case "currentTime":
            return b((null == n ? void 0 : n[e]) || 0);
          case "playbackRate":
          case "playState":
            return null == n ? void 0 : n[e];
          case "finished":
            return (
              t.finished ||
                (t.finished = Promise.all(t.animations.map(ct)).catch(l)),
              t.finished
            );
          case "stop":
            return () => {
              t.animations.forEach((t) => tt(t));
            };
          case "forEachNative":
            return (e) => {
              t.animations.forEach((n) => e(n, t));
            };
          default:
            return void 0 === (null == n ? void 0 : n[e])
              ? void 0
              : () => t.animations.forEach((t) => t[e]());
        }
      },
      set: (t, e, n) => {
        switch (e) {
          case "currentTime":
            n = w(n);
          case "currentTime":
          case "playbackRate":
            for (let i = 0; i < t.animations.length; i++)
              t.animations[i][e] = n;
            return !0;
        }
        return !1;
      },
    },
    ct = (t) => t.finished;
  function lt(t, e, n) {
    return y(t) ? t(e, n) : t;
  }
  function ut(t) {
    return function (e, n, i = {}) {
      const r = (e = rt(e)).length,
        o = [];
      for (let s = 0; s < r; s++) {
        const a = e[s];
        for (const e in n) {
          const c = it(i, e);
          c.delay = lt(c.delay, s, r);
          const l = nt(a, e, n[e], c, t);
          o.push(l);
        }
      }
      return st(o, i, i.duration);
    };
  }
  const ft = ut(A);
  function ht(t, e) {
    var n = {};
    for (var i in t)
      Object.prototype.hasOwnProperty.call(t, i) &&
        e.indexOf(i) < 0 &&
        (n[i] = t[i]);
    if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
      var r = 0;
      for (i = Object.getOwnPropertySymbols(t); r < i.length; r++)
        e.indexOf(i[r]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, i[r]) &&
          (n[i[r]] = t[i[r]]);
    }
    return n;
  }
  function dt(t, e, n, i) {
    var r;
    return o(e)
      ? e
      : e.startsWith("-") || e.startsWith("+")
      ? Math.max(0, t + parseFloat(e))
      : "<" === e
      ? n
      : null !== (r = i.get(e)) && void 0 !== r
      ? r
      : t;
  }
  function gt(t, e, i, r, o, s) {
    !(function (t, e, i) {
      for (let r = 0; r < t.length; r++) {
        const o = t[r];
        o.at > e && o.at < i && (n(t, o), r--);
      }
    })(t, o, s);
    for (let n = 0; n < e.length; n++)
      t.push({ value: e[n], at: c(o, s, r[n]), easing: a(i, n) });
  }
  function pt(t, e) {
    return t.at === e.at ? (null === t.value ? 1 : -1) : t.at - e.at;
  }
  function mt(t, e) {
    return !e.has(t) && e.set(t, {}), e.get(t);
  }
  function yt(t, e) {
    return e[t] || (e[t] = []), e[t];
  }
  function vt(t, e, n) {
    const i = Math.max(e - 5, 0);
    return E(n - t(i), e - i);
  }
  const wt = 100,
    bt = 10,
    Et = 1;
  const xt = ({
    stiffness: t = wt,
    damping: e = bt,
    mass: n = Et,
    from: i = 0,
    to: r = 1,
    velocity: o = 0,
    restSpeed: s = 2,
    restDistance: a = 0.5,
  } = {}) => {
    o = o ? b(o) : 0;
    const c = { done: !1, hasReachedTarget: !1, current: i, target: r },
      l = r - i,
      u = Math.sqrt(t / n) / 1e3,
      f = ((t = wt, e = bt, n = Et) => e / (2 * Math.sqrt(t * n)))(t, e, n);
    let h;
    if (f < 1) {
      const t = u * Math.sqrt(1 - f * f);
      h = (e) =>
        r -
        Math.exp(-f * u * e) *
          (((f * u * l - o) / t) * Math.sin(t * e) + l * Math.cos(t * e));
    } else h = (t) => r - Math.exp(-u * t) * (l + (u * l - o) * t);
    return (t) => {
      c.current = h(t);
      const e = 0 === t ? o : vt(h, t, c.current),
        n = Math.abs(e) <= s,
        l = Math.abs(r - c.current) <= a;
      var u, f, d;
      return (
        (c.done = n && l),
        (c.hasReachedTarget =
          ((u = i),
          (f = r),
          (d = c.current),
          (u < f && d >= f) || (u > f && d <= f))),
        c
      );
    };
  };
  function Ot(t) {
    return o(t) && !isNaN(t);
  }
  function St(t) {
    return v(t) ? parseFloat(t) : t;
  }
  function Mt(t) {
    const e = new WeakMap();
    return (n = {}) => {
      const i = new Map(),
        r = (e = 0, r = 100, o = 0, s = !1) => {
          const a = `${e}-${r}-${o}-${s}`;
          return (
            i.has(a) ||
              i.set(
                a,
                t(
                  Object.assign(
                    {
                      from: e,
                      to: r,
                      velocity: o,
                      restSpeed: s ? 0.05 : 2,
                      restDistance: s ? 0.01 : 0.5,
                    },
                    n
                  )
                )
              ),
            i.get(a)
          );
        },
        o = (t, n) => (
          e.has(t) ||
            e.set(
              t,
              (function (t, e = u) {
                let n,
                  i = 10,
                  r = t(0);
                const o = [e(r.current)];
                for (; !r.done && i < 1e4; )
                  (r = t(i)),
                    o.push(e(r.done ? r.target : r.current)),
                    void 0 === n && r.hasReachedTarget && (n = i),
                    (i += 10);
                const s = i - 10;
                return (
                  1 === o.length && o.push(r.current),
                  {
                    keyframes: o,
                    duration: s / 1e3,
                    overshootDuration: (null != n ? n : s) / 1e3,
                  }
                );
              })(t, n)
            ),
          e.get(t)
        );
      return {
        createAnimation: (t, e = !0, n, i, s) => {
          let a,
            c,
            l,
            f = 0,
            h = u;
          const d = t.length;
          if (e) {
            h = et(t, i ? B.get(J(i)) : void 0);
            if (((l = St(t[d - 1])), d > 1 && null !== t[0])) c = St(t[0]);
            else {
              const t = null == s ? void 0 : s.generator;
              if (t) {
                const { animation: e, generatorStartTime: n } = s,
                  i = (null == e ? void 0 : e.startTime) || n || 0,
                  r =
                    (null == e ? void 0 : e.currentTime) ||
                    performance.now() - i,
                  o = t(r).current;
                (c = o), (f = vt((e) => t(e).current, r, o));
              } else n && (c = St(n()));
            }
          }
          if (Ot(c) && Ot(l)) {
            const t = r(c, l, f, null == i ? void 0 : i.includes("scale"));
            (a = Object.assign(Object.assign({}, o(t, h)), {
              easing: "linear",
            })),
              s &&
                ((s.generator = t), (s.generatorStartTime = performance.now()));
          }
          if (!a) {
            a = { easing: "ease", duration: o(r(0, 100)).overshootDuration };
          }
          return a;
        },
      };
    };
  }
  const Tt = Mt(xt),
    At = Mt(
      ({
        from: t = 0,
        velocity: e = 0,
        power: n = 0.8,
        decay: i = 0.325,
        bounceDamping: r,
        bounceStiffness: o,
        changeTarget: s,
        min: a,
        max: c,
        restDistance: l = 0.5,
        restSpeed: u,
      }) => {
        i = w(i);
        const f = { hasReachedTarget: !1, done: !1, current: t, target: t },
          h = (t) =>
            void 0 === a
              ? c
              : void 0 === c || Math.abs(a - t) < Math.abs(c - t)
              ? a
              : c;
        let d = n * e;
        const g = t + d,
          p = void 0 === s ? g : s(g);
        (f.target = p), p !== g && (d = p - t);
        const m = (t) => -d * Math.exp(-t / i),
          y = (t) => p + m(t),
          v = (t) => {
            const e = m(t),
              n = y(t);
            (f.done = Math.abs(e) <= l), (f.current = f.done ? p : n);
          };
        let b, E;
        const x = (t) => {
          var e;
          ((e = f.current),
          (void 0 !== a && e < a) || (void 0 !== c && e > c)) &&
            ((b = t),
            (E = xt({
              from: f.current,
              to: h(f.current),
              velocity: vt(y, t, f.current),
              damping: r,
              stiffness: o,
              restDistance: l,
              restSpeed: u,
            })));
        };
        return (
          x(0),
          (t) => {
            let e = !1;
            return (
              E || void 0 !== b || ((e = !0), v(t), x(t)),
              void 0 !== b && t > b
                ? ((f.hasReachedTarget = !0), E(t - b))
                : ((f.hasReachedTarget = !1), !e && v(t), f)
            );
          }
        );
      }
    ),
    Dt = { any: 0, all: 1 };
  function Lt(t, e, { root: n, margin: i, amount: r = "any" } = {}) {
    if ("undefined" == typeof IntersectionObserver) return () => {};
    const o = rt(t),
      s = new WeakMap(),
      a = new IntersectionObserver(
        (t) => {
          t.forEach((t) => {
            const n = s.get(t.target);
            if (t.isIntersecting !== Boolean(n))
              if (t.isIntersecting) {
                const n = e(t);
                y(n) ? s.set(t.target, n) : a.unobserve(t.target);
              } else n && (n(t), s.delete(t.target));
          });
        },
        { root: n, rootMargin: i, threshold: "number" == typeof r ? r : Dt[r] }
      );
    return o.forEach((t) => a.observe(t)), () => a.disconnect();
  }
  const kt = new WeakMap();
  let Wt;
  function jt({ target: t, contentRect: e, borderBoxSize: n }) {
    var i;
    null === (i = kt.get(t)) ||
      void 0 === i ||
      i.forEach((i) => {
        i({
          target: t,
          contentSize: e,
          get size() {
            return (function (t, e) {
              if (e) {
                const { inlineSize: t, blockSize: n } = e[0];
                return { width: t, height: n };
              }
              return t instanceof SVGElement && "getBBox" in t
                ? t.getBBox()
                : { width: t.offsetWidth, height: t.offsetHeight };
            })(t, n);
          },
        });
      });
  }
  function Rt(t) {
    t.forEach(jt);
  }
  function zt(t, e) {
    Wt ||
      ("undefined" != typeof ResizeObserver && (Wt = new ResizeObserver(Rt)));
    const n = rt(t);
    return (
      n.forEach((t) => {
        let n = kt.get(t);
        n || ((n = new Set()), kt.set(t, n)),
          n.add(e),
          null == Wt || Wt.observe(t);
      }),
      () => {
        n.forEach((t) => {
          const n = kt.get(t);
          null == n || n.delete(e),
            (null == n ? void 0 : n.size) || null == Wt || Wt.unobserve(t);
        });
      }
    );
  }
  const Bt = new Set();
  let Pt;
  function Vt(t) {
    return (
      Bt.add(t),
      Pt ||
        ((Pt = () => {
          const t = { width: window.innerWidth, height: window.innerHeight },
            e = { target: window, size: t, contentSize: t };
          Bt.forEach((t) => t(e));
        }),
        window.addEventListener("resize", Pt)),
      () => {
        Bt.delete(t), !Bt.size && Pt && (Pt = void 0);
      }
    );
  }
  function $t(t, e) {
    return y(t) ? Vt(t) : zt(t, e);
  }
  const qt = {
    x: { length: "Width", position: "Left" },
    y: { length: "Height", position: "Top" },
  };
  function Ct(t, e, n, i) {
    const r = n[e],
      { length: o, position: s } = qt[e],
      a = r.current,
      c = n.time;
    (r.current = t["scroll" + s]),
      (r.scrollLength = t["scroll" + o] - t["client" + o]),
      (r.offset.length = 0),
      (r.offset[0] = 0),
      (r.offset[1] = r.scrollLength),
      (r.progress = f(0, r.scrollLength, r.current));
    const l = i - c;
    r.velocity = l > 50 ? 0 : E(r.current - a, l);
  }
  const Ft = {
      Enter: [
        [0, 1],
        [1, 1],
      ],
      Exit: [
        [0, 0],
        [1, 0],
      ],
      Any: [
        [1, 0],
        [0, 1],
      ],
      All: [
        [0, 0],
        [1, 1],
      ],
    },
    Ht = { start: 0, center: 0.5, end: 1 };
  function It(t, e, n = 0) {
    let i = 0;
    if ((void 0 !== Ht[t] && (t = Ht[t]), v(t))) {
      const e = parseFloat(t);
      t.endsWith("px")
        ? (i = e)
        : t.endsWith("%")
        ? (t = e / 100)
        : t.endsWith("vw")
        ? (i = (e / 100) * document.documentElement.clientWidth)
        : t.endsWith("vh")
        ? (i = (e / 100) * document.documentElement.clientHeight)
        : (t = e);
    }
    return o(t) && (i = e * t), n + i;
  }
  const Ut = [0, 0];
  function Nt(t, e, n, i) {
    let r = Array.isArray(t) ? t : Ut,
      s = 0,
      a = 0;
    return (
      o(t)
        ? (r = [t, t])
        : v(t) &&
          (r = (t = t.trim()).includes(" ")
            ? t.split(" ")
            : [t, Ht[t] ? t : "0"]),
      (s = It(r[0], n, i)),
      (a = It(r[1], e)),
      s - a
    );
  }
  const _t = { x: 0, y: 0 };
  function Gt(t, e, n) {
    let { offset: i = Ft.All } = n;
    const { target: r = t, axis: o = "y" } = n,
      s = "y" === o ? "height" : "width",
      a =
        r !== t
          ? (function (t, e) {
              let n = { x: 0, y: 0 },
                i = t;
              for (; i && i !== e; )
                if (i instanceof HTMLElement)
                  (n.x += i.offsetLeft),
                    (n.y += i.offsetTop),
                    (i = i.offsetParent);
                else if (i instanceof SVGGraphicsElement && "getBBox" in i) {
                  const { top: t, left: e } = i.getBBox();
                  for (n.x += e, n.y += t; i && "svg" !== i.tagName; )
                    i = i.parentNode;
                }
              return n;
            })(r, t)
          : _t,
      c =
        r === t
          ? { width: t.scrollWidth, height: t.scrollHeight }
          : { width: r.clientWidth, height: r.clientHeight },
      l = { width: t.clientWidth, height: t.clientHeight };
    e[o].offset.length = 0;
    let u = !e[o].interpolate;
    const f = i.length;
    for (let t = 0; t < f; t++) {
      const n = Nt(i[t], l[s], c[s], a[o]);
      u || n === e[o].interpolatorOffsets[t] || (u = !0), (e[o].offset[t] = n);
    }
    u &&
      ((e[o].interpolate = g(d(f), e[o].offset)),
      (e[o].interpolatorOffsets = [...e[o].offset])),
      (e[o].progress = e[o].interpolate(e[o].current));
  }
  function Zt(t, e, n, i = {}) {
    const r = i.axis || "y";
    return {
      measure: () =>
        (function (t, e = t, n) {
          if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), e !== t)) {
            let i = e;
            for (; i && i != t; )
              (n.x.targetOffset += i.offsetLeft),
                (n.y.targetOffset += i.offsetTop),
                (i = i.offsetParent);
          }
          (n.x.targetLength = e === t ? e.scrollWidth : e.clientWidth),
            (n.y.targetLength = e === t ? e.scrollHeight : e.clientHeight),
            (n.x.containerLength = t.clientWidth),
            (n.y.containerLength = t.clientHeight);
        })(t, i.target, n),
      update: (e) => {
        !(function (t, e, n) {
          Ct(t, "x", e, n), Ct(t, "y", e, n), (e.time = n);
        })(t, n, e),
          (i.offset || i.target) && Gt(t, n, i);
      },
      notify: y(e) ? () => e(n) : Kt(e, n[r]),
    };
  }
  function Kt(t, e) {
    return (
      t.pause(),
      t.forEachNative((t, { easing: e }) => {
        var n, i;
        if (t.updateDuration) e || (t.easing = u), t.updateDuration(1);
        else {
          const r = { duration: 1e3 };
          e || (r.easing = "linear"),
            null ===
              (i =
                null === (n = t.effect) || void 0 === n
                  ? void 0
                  : n.updateTiming) ||
              void 0 === i ||
              i.call(n, r);
        }
      }),
      () => {
        t.currentTime = e.progress;
      }
    );
  }
  const Xt = new WeakMap(),
    Yt = new WeakMap(),
    Jt = new WeakMap(),
    Qt = (t) => (t === document.documentElement ? window : t);
  function te(t, e) {
    return (function (t) {
      return "object" == typeof t;
    })(t)
      ? t
      : t && e
      ? e[t]
      : void 0;
  }
  let ee;
  function ne() {
    if (!ee) return;
    const t = ee.sort(re).map(oe);
    t.forEach(se), t.forEach(se), (ee = void 0);
  }
  function ie(t) {
    ee ? e(ee, t) : ((ee = [t]), requestAnimationFrame(ne));
  }
  const re = (t, e) => t.getDepth() - e.getDepth(),
    oe = (t) => t.animateUpdates(),
    se = (t) => t.next(),
    ae = (t, e) => new CustomEvent(t, { detail: { target: e } });
  function ce(t, e, n) {
    t.dispatchEvent(new CustomEvent(e, { detail: { originalEvent: n } }));
  }
  function le(t, e, n) {
    t.dispatchEvent(new CustomEvent(e, { detail: { originalEntry: n } }));
  }
  const ue = (t, e, n) => (i) => {
      (i.pointerType && "mouse" !== i.pointerType) || (n(), ce(t, e, i));
    },
    fe = {
      inView: {
        isActive: (t) => Boolean(t.inView),
        subscribe: (
          t,
          { enable: e, disable: n },
          { inViewOptions: i = {} }
        ) => {
          const { once: r } = i,
            o = ht(i, ["once"]);
          return Lt(
            t,
            (i) => {
              if ((e(), le(t, "viewenter", i), !r))
                return (e) => {
                  n(), le(t, "viewleave", e);
                };
            },
            o
          );
        },
      },
      hover: {
        isActive: (t) => Boolean(t.hover),
        subscribe: (t, { enable: e, disable: n }) => {
          const i = ue(t, "hoverstart", e),
            r = ue(t, "hoverend", n);
          return (
            t.addEventListener("pointerenter", i),
            t.addEventListener("pointerleave", r),
            () => {
              t.removeEventListener("pointerenter", i),
                t.removeEventListener("pointerleave", r);
            }
          );
        },
      },
      press: {
        isActive: (t) => Boolean(t.press),
        subscribe: (t, { enable: e, disable: n }) => {
          const i = (e) => {
              n(),
                ce(t, "pressend", e),
                window.removeEventListener("pointerup", i);
            },
            r = (n) => {
              e(),
                ce(t, "pressstart", n),
                window.addEventListener("pointerup", i);
            };
          return (
            t.addEventListener("pointerdown", r),
            () => {
              t.removeEventListener("pointerdown", r),
                window.removeEventListener("pointerup", i);
            }
          );
        },
      },
    },
    he = ["initial", "animate", ...Object.keys(fe), "exit"],
    de = new WeakMap();
  function ge(t) {
    const e = {},
      n = [];
    for (let i in t) {
      const r = t[i];
      C(i) && (j[i] && (i = j[i]), n.push(i), (i = P(i)));
      let s = Array.isArray(r) ? r[0] : r;
      const a = B.get(i);
      a && (s = o(r) ? a.toDefaultUnit(r) : r), (e[i] = s);
    }
    return n.length && (e.transform = F(n)), e;
  }
  const pe = (t) => `-${t.toLowerCase()}`;
  function me(t, e = {}) {
    return st(
      [
        () => {
          const n = new A(t, [0, 1], e);
          return n.finished.catch(() => {}), n;
        },
      ],
      e,
      e.duration
    );
  }
  (t.MotionValue = D),
    (t.ScrollOffset = Ft),
    (t.animate = function (t, e, n) {
      return (y(t) ? me : ft)(t, e, n);
    }),
    (t.animateStyle = nt),
    (t.createAnimate = ut),
    (t.createMotionState = function (t = {}, e) {
      let i,
        r = e ? e.getDepth() + 1 : 0;
      const o = { initial: !0, animate: !0 },
        s = {},
        a = {};
      for (const n of he)
        a[n] =
          "string" == typeof t[n]
            ? t[n]
            : null == e
            ? void 0
            : e.getContext()[n];
      const c = !1 === t.initial ? "animate" : "initial";
      let u = ht(te(t[c] || a[c], t.variants) || {}, ["transition"]);
      const f = Object.assign({}, u),
        h = (t, e) => () => {
          (o[t] = e), ie(g);
        },
        d = () => {
          for (const e in fe) {
            const n = fe[e].isActive(t),
              r = s[e];
            n && !r
              ? (s[e] = fe[e].subscribe(
                  i,
                  { enable: h(e, !0), disable: h(e, !1) },
                  t
                ))
              : !n && r && (r(), delete s[e]);
          }
        },
        g = {
          update: (e) => {
            i && ((t = e), d(), ie(g));
          },
          setActive: (t, e) => {
            i && ((o[t] = e), ie(g));
          },
          animateUpdates: function* () {
            var e, n;
            const r = u;
            u = {};
            const s = {};
            for (const i of he) {
              if (!o[i]) continue;
              const r = te(t[i]);
              if (r)
                for (const i in r)
                  "transition" !== i &&
                    ((u[i] = r[i]),
                    (s[i] = it(
                      null !==
                        (n =
                          null !== (e = r.transition) && void 0 !== e
                            ? e
                            : t.transition) && void 0 !== n
                        ? n
                        : {},
                      i
                    )));
            }
            const a = new Set([...Object.keys(u), ...Object.keys(r)]),
              c = [];
            a.forEach((t) => {
              var e, n, o;
              void 0 === u[t] && (u[t] = f[t]),
                (n = r[t]),
                (o = u[t]),
                (typeof n == typeof o &&
                  (Array.isArray(n) && Array.isArray(o)
                    ? (function (t, e) {
                        const n = e.length;
                        if (n !== t.length) return !1;
                        for (let i = 0; i < n; i++)
                          if (e[i] !== t[i]) return !1;
                        return !0;
                      })(n, o)
                    : n === o)) ||
                  ((null !== (e = f[t]) && void 0 !== e) ||
                    (f[t] = Q.get(i, t)),
                  c.push(nt(i, t, u[t], s[t], A)));
            }),
              yield;
            const h = c.map((t) => t()).filter(Boolean);
            if (!h.length) return;
            const d = u;
            i.dispatchEvent(ae("motionstart", d)),
              Promise.all(h.map((t) => t.finished))
                .then(() => {
                  i.dispatchEvent(ae("motioncomplete", d));
                })
                .catch(l);
          },
          getDepth: () => r,
          getTarget: () => u,
          getOptions: () => t,
          getContext: () => a,
          mount: (t) => (
            (i = t),
            de.set(i, g),
            d(),
            () => {
              de.delete(i),
                (function (t) {
                  ee && n(ee, t);
                })(g);
              for (const t in s) s[t]();
            }
          ),
          isMounted: () => Boolean(i),
        };
      return g;
    }),
    (t.createStyleString = function (t = {}) {
      const e = ge(t);
      let n = "";
      for (const t in e)
        (n += t.startsWith("--") ? t : t.replace(/[A-Z]/g, pe)),
          (n += `: ${e[t]}; `);
      return n;
    }),
    (t.createStyles = ge),
    (t.getAnimationData = k),
    (t.getStyleName = J),
    (t.glide = At),
    (t.inView = Lt),
    (t.mountedStates = de),
    (t.resize = $t),
    (t.scroll = function (t, e = {}) {
      var { container: n = document.documentElement } = e,
        i = ht(e, ["container"]);
      let r = Jt.get(n);
      r || ((r = new Set()), Jt.set(n, r));
      const o = Zt(
        n,
        t,
        {
          time: 0,
          x: {
            current: 0,
            offset: [],
            progress: 0,
            scrollLength: 0,
            targetOffset: 0,
            targetLength: 0,
            containerLength: 0,
            velocity: 0,
          },
          y: {
            current: 0,
            offset: [],
            progress: 0,
            scrollLength: 0,
            targetOffset: 0,
            targetLength: 0,
            containerLength: 0,
            velocity: 0,
          },
        },
        i
      );
      if ((r.add(o), !Xt.has(n))) {
        const t = () => {
          const t = performance.now();
          for (const t of r) t.measure();
          for (const e of r) e.update(t);
          for (const t of r) t.notify();
        };
        Xt.set(n, t);
        const e = Qt(n);
        window.addEventListener("resize", t, { passive: !0 }),
          n !== document.documentElement && Yt.set(n, $t(n, t)),
          e.addEventListener("scroll", t, { passive: !0 });
      }
      const s = Xt.get(n),
        a = requestAnimationFrame(s);
      return () => {
        var e;
        "function" != typeof t && t.stop(), cancelAnimationFrame(a);
        const i = Jt.get(n);
        if (!i) return;
        if ((i.delete(o), i.size)) return;
        const r = Xt.get(n);
        Xt.delete(n),
          r &&
            (Qt(n).removeEventListener("scroll", r),
            null === (e = Yt.get(n)) || void 0 === e || e(),
            window.removeEventListener("resize", r));
      };
    }),
    (t.spring = Tt),
    (t.stagger = function (
      t = 0.1,
      { start: e = 0, from: n = 0, easing: i } = {}
    ) {
      return (r, s) => {
        const a = o(n)
            ? n
            : (function (t, e) {
                if ("first" === t) return 0;
                {
                  const n = e - 1;
                  return "last" === t ? n : n / 2;
                }
              })(n, s),
          c = Math.abs(a - r);
        let l = t * c;
        if (i) {
          const e = s * t;
          l = T(i)(l / e) * e;
        }
        return e + l;
      };
    }),
    (t.style = Q),
    (t.timeline = function (t, e = {}) {
      var n;
      const i = (function (t, e = {}) {
          var { defaultOptions: n = {} } = e,
            i = ht(e, ["defaultOptions"]);
          const o = [],
            s = new Map(),
            a = {},
            c = new Map();
          let l = 0,
            u = 0,
            g = 0;
          for (let e = 0; e < t.length; e++) {
            const i = t[e];
            if (v(i)) {
              c.set(i, u);
              continue;
            }
            if (!Array.isArray(i)) {
              c.set(i.name, dt(u, i.at, l, c));
              continue;
            }
            const [o, f, p = {}] = i;
            void 0 !== p.at && (u = dt(u, p.at, l, c));
            let y = 0;
            const w = rt(o, a),
              b = w.length;
            for (let t = 0; t < b; t++) {
              const e = mt(w[t], s);
              for (const i in f) {
                const o = yt(i, e);
                let s = Y(f[i]);
                const a = it(p, i);
                let {
                  duration: c = n.duration || r.duration,
                  easing: l = n.easing || r.easing,
                } = a;
                if (m(l)) {
                  "opacity" === i || s.length;
                  const t = l.createAnimation(s, "opacity" !== i, () => 0, i);
                  (l = t.easing), (s = t.keyframes || s), (c = t.duration || c);
                }
                const v = lt(p.delay, t, b) || 0,
                  w = u + v,
                  E = w + c;
                let { offset: x = d(s.length) } = a;
                1 === x.length && 0 === x[0] && (x[1] = 1);
                const O = x.length - s.length;
                O > 0 && h(x, O),
                  1 === s.length && s.unshift(null),
                  gt(o, s, l, x, w, E),
                  (y = Math.max(v + c, y)),
                  (g = Math.max(E, g));
              }
            }
            (l = u), (u += y);
          }
          return (
            s.forEach((t, e) => {
              for (const s in t) {
                const a = t[s];
                a.sort(pt);
                const c = [],
                  l = [],
                  u = [];
                for (let t = 0; t < a.length; t++) {
                  const { at: e, value: n, easing: i } = a[t];
                  c.push(n), l.push(f(0, g, e)), u.push(i || r.easing);
                }
                0 !== l[0] &&
                  (l.unshift(0), c.unshift(c[0]), u.unshift("linear")),
                  1 !== l[l.length - 1] && (l.push(1), c.push(null)),
                  o.push([
                    e,
                    s,
                    c,
                    Object.assign(
                      Object.assign(Object.assign({}, n), {
                        duration: g,
                        easing: u,
                        offset: l,
                      }),
                      i
                    ),
                  ]);
              }
            }),
            o
          );
        })(t, e),
        o = i.map((t) => nt(...t, A)).filter(Boolean);
      return st(
        o,
        e,
        null === (n = i[0]) || void 0 === n ? void 0 : n[3].duration
      );
    }),
    (t.withControls = st),
    Object.defineProperty(t, "__esModule", { value: !0 });
});
!(function (t, e) {
  "object" == typeof module && module.exports
    ? (module.exports = e())
    : (t.EvEmitter = e());
})("undefined" != typeof window ? window : this, function () {
  function t() {}
  let e = t.prototype;
  return (
    (e.on = function (t, e) {
      if (!t || !e) return this;
      let i = (this._events = this._events || {}),
        s = (i[t] = i[t] || []);
      return s.includes(e) || s.push(e), this;
    }),
    (e.once = function (t, e) {
      if (!t || !e) return this;
      this.on(t, e);
      let i = (this._onceEvents = this._onceEvents || {});
      return ((i[t] = i[t] || {})[e] = !0), this;
    }),
    (e.off = function (t, e) {
      let i = this._events && this._events[t];
      if (!i || !i.length) return this;
      let s = i.indexOf(e);
      return -1 != s && i.splice(s, 1), this;
    }),
    (e.emitEvent = function (t, e) {
      let i = this._events && this._events[t];
      if (!i || !i.length) return this;
      (i = i.slice(0)), (e = e || []);
      let s = this._onceEvents && this._onceEvents[t];
      for (let n of i) {
        s && s[n] && (this.off(t, n), delete s[n]), n.apply(this, e);
      }
      return this;
    }),
    (e.allOff = function () {
      return delete this._events, delete this._onceEvents, this;
    }),
    t
  );
}),
  (function (t, e) {
    "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.getSize = e());
  })(window, function () {
    function t(t) {
      let e = parseFloat(t);
      return -1 == t.indexOf("%") && !isNaN(e) && e;
    }
    let e = [
      "paddingLeft",
      "paddingRight",
      "paddingTop",
      "paddingBottom",
      "marginLeft",
      "marginRight",
      "marginTop",
      "marginBottom",
      "borderLeftWidth",
      "borderRightWidth",
      "borderTopWidth",
      "borderBottomWidth",
    ];
    e.length;
    return function (i) {
      if (
        ("string" == typeof i && (i = document.querySelector(i)),
        !(i && "object" == typeof i && i.nodeType))
      )
        return;
      let s = getComputedStyle(i);
      if ("none" == s.display)
        return (function () {
          let t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0,
          };
          return (
            e.forEach((e) => {
              t[e] = 0;
            }),
            t
          );
        })();
      let n = {};
      (n.width = i.offsetWidth), (n.height = i.offsetHeight);
      let o = (n.isBorderBox = "border-box" == s.boxSizing);
      e.forEach((t) => {
        let e = s[t],
          i = parseFloat(e);
        n[t] = isNaN(i) ? 0 : i;
      });
      let l = n.paddingLeft + n.paddingRight,
        h = n.paddingTop + n.paddingBottom,
        r = n.marginLeft + n.marginRight,
        a = n.marginTop + n.marginBottom,
        c = n.borderLeftWidth + n.borderRightWidth,
        d = n.borderTopWidth + n.borderBottomWidth,
        u = t(s.width);
      !1 !== u && (n.width = u + (o ? 0 : l + c));
      let p = t(s.height);
      return (
        !1 !== p && (n.height = p + (o ? 0 : h + d)),
        (n.innerWidth = n.width - (l + c)),
        (n.innerHeight = n.height - (h + d)),
        (n.outerWidth = n.width + r),
        (n.outerHeight = n.height + a),
        n
      );
    };
  }),
  (function (t, e) {
    "object" == typeof module && module.exports
      ? (module.exports = e(t))
      : (t.fizzyUIUtils = e(t));
  })(this, function (t) {
    let e = {
        extend: function (t, e) {
          return Object.assign(t, e);
        },
        modulo: function (t, e) {
          return ((t % e) + e) % e;
        },
        makeArray: function (t) {
          if (Array.isArray(t)) return t;
          if (null == t) return [];
          return "object" == typeof t && "number" == typeof t.length
            ? [...t]
            : [t];
        },
        removeFrom: function (t, e) {
          let i = t.indexOf(e);
          -1 != i && t.splice(i, 1);
        },
        getParent: function (t, e) {
          for (; t.parentNode && t != document.body; )
            if ((t = t.parentNode).matches(e)) return t;
        },
        getQueryElement: function (t) {
          return "string" == typeof t ? document.querySelector(t) : t;
        },
        handleEvent: function (t) {
          let e = "on" + t.type;
          this[e] && this[e](t);
        },
        filterFindElements: function (t, i) {
          return (t = e.makeArray(t))
            .filter((t) => t instanceof HTMLElement)
            .reduce((t, e) => {
              if (!i) return t.push(e), t;
              e.matches(i) && t.push(e);
              let s = e.querySelectorAll(i);
              return (t = t.concat(...s));
            }, []);
        },
        debounceMethod: function (t, e, i) {
          i = i || 100;
          let s = t.prototype[e],
            n = e + "Timeout";
          t.prototype[e] = function () {
            clearTimeout(this[n]);
            let t = arguments;
            this[n] = setTimeout(() => {
              s.apply(this, t), delete this[n];
            }, i);
          };
        },
        docReady: function (t) {
          let e = document.readyState;
          "complete" == e || "interactive" == e
            ? setTimeout(t)
            : document.addEventListener("DOMContentLoaded", t);
        },
        toDashed: function (t) {
          return t
            .replace(/(.)([A-Z])/g, function (t, e, i) {
              return e + "-" + i;
            })
            .toLowerCase();
        },
      },
      i = t.console;
    return (
      (e.htmlInit = function (s, n) {
        e.docReady(function () {
          let o = "data-" + e.toDashed(n),
            l = document.querySelectorAll(`[${o}]`),
            h = t.jQuery;
          [...l].forEach((t) => {
            let e,
              l = t.getAttribute(o);
            try {
              e = l && JSON.parse(l);
            } catch (e) {
              return void (
                i && i.error(`Error parsing ${o} on ${t.class}: ${e}`)
              );
            }
            let r = new s(t, e);
            h && h.data(t, n, r);
          });
        });
      }),
      e
    );
  }),
  (function (t, e) {
    "object" == typeof module && module.exports
      ? (module.exports = e(t, require("ev-emitter")))
      : (t.Unidragger = e(t, t.EvEmitter));
  })("undefined" != typeof window ? window : this, function (t, e) {
    function i() {}
    let s,
      n,
      o = (i.prototype = Object.create(e.prototype));
    (o.handleEvent = function (t) {
      let e = "on" + t.type;
      this[e] && this[e](t);
    }),
      "ontouchstart" in t
        ? ((s = "touchstart"), (n = ["touchmove", "touchend", "touchcancel"]))
        : t.PointerEvent
        ? ((s = "pointerdown"),
          (n = ["pointermove", "pointerup", "pointercancel"]))
        : ((s = "mousedown"), (n = ["mousemove", "mouseup"])),
      (o.touchActionValue = "none"),
      (o.bindHandles = function () {
        this._bindHandles("addEventListener", this.touchActionValue);
      }),
      (o.unbindHandles = function () {
        this._bindHandles("removeEventListener", "");
      }),
      (o._bindHandles = function (e, i) {
        this.handles.forEach((n) => {
          n[e](s, this),
            n[e]("click", this),
            t.PointerEvent && (n.style.touchAction = i);
        });
      }),
      (o.bindActivePointerEvents = function () {
        n.forEach((e) => {
          t.addEventListener(e, this);
        });
      }),
      (o.unbindActivePointerEvents = function () {
        n.forEach((e) => {
          t.removeEventListener(e, this);
        });
      }),
      (o.withPointer = function (t, e) {
        e.pointerId === this.pointerIdentifier && this[t](e, e);
      }),
      (o.withTouch = function (t, e) {
        let i;
        for (let t of e.changedTouches)
          t.identifier === this.pointerIdentifier && (i = t);
        i && this[t](e, i);
      }),
      (o.onmousedown = function (t) {
        this.pointerDown(t, t);
      }),
      (o.ontouchstart = function (t) {
        this.pointerDown(t, t.changedTouches[0]);
      }),
      (o.onpointerdown = function (t) {
        this.pointerDown(t, t);
      });
    const l = ["TEXTAREA", "INPUT", "SELECT", "OPTION"],
      h = ["radio", "checkbox", "button", "submit", "image", "file"];
    return (
      (o.pointerDown = function (t, e) {
        let i = l.includes(t.target.nodeName),
          s = h.includes(t.target.type),
          n = !i || s;
        !this.isPointerDown &&
          !t.button &&
          n &&
          ((this.isPointerDown = !0),
          (this.pointerIdentifier =
            void 0 !== e.pointerId ? e.pointerId : e.identifier),
          (this.pointerDownPointer = { pageX: e.pageX, pageY: e.pageY }),
          this.bindActivePointerEvents(),
          this.emitEvent("pointerDown", [t, e]));
      }),
      (o.onmousemove = function (t) {
        this.pointerMove(t, t);
      }),
      (o.onpointermove = function (t) {
        this.withPointer("pointerMove", t);
      }),
      (o.ontouchmove = function (t) {
        this.withTouch("pointerMove", t);
      }),
      (o.pointerMove = function (t, e) {
        let i = {
          x: e.pageX - this.pointerDownPointer.pageX,
          y: e.pageY - this.pointerDownPointer.pageY,
        };
        this.emitEvent("pointerMove", [t, e, i]),
          !this.isDragging && this.hasDragStarted(i) && this.dragStart(t, e),
          this.isDragging && this.dragMove(t, e, i);
      }),
      (o.hasDragStarted = function (t) {
        return Math.abs(t.x) > 3 || Math.abs(t.y) > 3;
      }),
      (o.dragStart = function (t, e) {
        (this.isDragging = !0),
          (this.isPreventingClicks = !0),
          this.emitEvent("dragStart", [t, e]);
      }),
      (o.dragMove = function (t, e, i) {
        this.emitEvent("dragMove", [t, e, i]);
      }),
      (o.onmouseup = function (t) {
        this.pointerUp(t, t);
      }),
      (o.onpointerup = function (t) {
        this.withPointer("pointerUp", t);
      }),
      (o.ontouchend = function (t) {
        this.withTouch("pointerUp", t);
      }),
      (o.pointerUp = function (t, e) {
        this.pointerDone(),
          this.emitEvent("pointerUp", [t, e]),
          this.isDragging ? this.dragEnd(t, e) : this.staticClick(t, e);
      }),
      (o.dragEnd = function (t, e) {
        (this.isDragging = !1),
          setTimeout(() => delete this.isPreventingClicks),
          this.emitEvent("dragEnd", [t, e]);
      }),
      (o.pointerDone = function () {
        (this.isPointerDown = !1),
          delete this.pointerIdentifier,
          this.unbindActivePointerEvents(),
          this.emitEvent("pointerDone");
      }),
      (o.onpointercancel = function (t) {
        this.withPointer("pointerCancel", t);
      }),
      (o.ontouchcancel = function (t) {
        this.withTouch("pointerCancel", t);
      }),
      (o.pointerCancel = function (t, e) {
        this.pointerDone(), this.emitEvent("pointerCancel", [t, e]);
      }),
      (o.onclick = function (t) {
        this.isPreventingClicks && t.preventDefault();
      }),
      (o.staticClick = function (t, e) {
        let i = "mouseup" === t.type;
        (i && this.isIgnoringMouseUp) ||
          (this.emitEvent("staticClick", [t, e]),
          i &&
            ((this.isIgnoringMouseUp = !0),
            setTimeout(() => {
              delete this.isIgnoringMouseUp;
            }, 400)));
      }),
      i
    );
  }),
  (function (t, e) {
    "object" == typeof module && module.exports
      ? (module.exports = e(require("get-size")))
      : ((t.Flickity = t.Flickity || {}), (t.Flickity.Cell = e(t.getSize)));
  })("undefined" != typeof window ? window : this, function (t) {
    const e = "flickity-cell";
    function i(t) {
      (this.element = t),
        this.element.classList.add(e),
        (this.x = 0),
        this.unselect();
    }
    let s = i.prototype;
    return (
      (s.destroy = function () {
        this.unselect(),
          this.element.classList.remove(e),
          (this.element.style.transform = ""),
          this.element.removeAttribute("aria-hidden");
      }),
      (s.getSize = function () {
        this.size = t(this.element);
      }),
      (s.select = function () {
        this.element.classList.add("is-selected"),
          this.element.removeAttribute("aria-hidden");
      }),
      (s.unselect = function () {
        this.element.classList.remove("is-selected"),
          this.element.setAttribute("aria-hidden", "true");
      }),
      (s.remove = function () {
        this.element.remove();
      }),
      i
    );
  }),
  (function (t, e) {
    "object" == typeof module && module.exports
      ? (module.exports = e())
      : ((t.Flickity = t.Flickity || {}), (t.Flickity.Slide = e()));
  })("undefined" != typeof window ? window : this, function () {
    function t(t, e, i) {
      (this.beginMargin = t),
        (this.endMargin = e),
        (this.cellAlign = i),
        (this.cells = []),
        (this.outerWidth = 0),
        (this.height = 0);
    }
    let e = t.prototype;
    return (
      (e.addCell = function (t) {
        this.cells.push(t),
          (this.outerWidth += t.size.outerWidth),
          (this.height = Math.max(t.size.outerHeight, this.height)),
          1 === this.cells.length &&
            ((this.x = t.x), (this.firstMargin = t.size[this.beginMargin]));
      }),
      (e.updateTarget = function () {
        let t = this.getLastCell(),
          e = t ? t.size[this.endMargin] : 0,
          i = this.outerWidth - (this.firstMargin + e);
        this.target = this.x + this.firstMargin + i * this.cellAlign;
      }),
      (e.getLastCell = function () {
        return this.cells[this.cells.length - 1];
      }),
      (e.select = function () {
        this.cells.forEach((t) => t.select());
      }),
      (e.unselect = function () {
        this.cells.forEach((t) => t.unselect());
      }),
      (e.getCellElements = function () {
        return this.cells.map((t) => t.element);
      }),
      t
    );
  }),
  (function (t, e) {
    "object" == typeof module && module.exports
      ? (module.exports = e(require("fizzy-ui-utils")))
      : ((t.Flickity = t.Flickity || {}),
        (t.Flickity.animatePrototype = e(t.fizzyUIUtils)));
  })("undefined" != typeof window ? window : this, function (t) {
    let e = {
      startAnimation: function () {
        this.isAnimating ||
          ((this.isAnimating = !0), (this.restingFrames = 0), this.animate());
      },
      animate: function () {
        this.applyDragForce(), this.applySelectedAttraction();
        let t = this.x;
        this.integratePhysics(),
          this.positionSlider(),
          this.settle(t),
          this.isAnimating && requestAnimationFrame(() => this.animate());
      },
      positionSlider: function () {
        let e = this.x;
        this.isWrapping &&
          ((e = t.modulo(e, this.slideableWidth) - this.slideableWidth),
          this.shiftWrapCells(e)),
          this.setTranslateX(e, this.isAnimating),
          this.dispatchScrollEvent();
      },
      setTranslateX: function (t, e) {
        (t += this.cursorPosition), this.options.rightToLeft && (t = -t);
        let i = this.getPositionValue(t);
        this.slider.style.transform = e
          ? `translate3d(${i},0,0)`
          : `translateX(${i})`;
      },
      dispatchScrollEvent: function () {
        let t = this.slides[0];
        if (!t) return;
        let e = -this.x - t.target,
          i = e / this.slidesWidth;
        this.dispatchEvent("scroll", null, [i, e]);
      },
      positionSliderAtSelected: function () {
        this.cells.length &&
          ((this.x = -this.selectedSlide.target),
          (this.velocity = 0),
          this.positionSlider());
      },
      getPositionValue: function (t) {
        return this.options.percentPosition
          ? 0.01 * Math.round((t / this.size.innerWidth) * 1e4) + "%"
          : Math.round(t) + "px";
      },
      settle: function (t) {
        !this.isPointerDown &&
          Math.round(100 * this.x) === Math.round(100 * t) &&
          this.restingFrames++,
          this.restingFrames > 2 &&
            ((this.isAnimating = !1),
            delete this.isFreeScrolling,
            this.positionSlider(),
            this.dispatchEvent("settle", null, [this.selectedIndex]));
      },
      shiftWrapCells: function (t) {
        let e = this.cursorPosition + t;
        this._shiftCells(this.beforeShiftCells, e, -1);
        let i =
          this.size.innerWidth -
          (t + this.slideableWidth + this.cursorPosition);
        this._shiftCells(this.afterShiftCells, i, 1);
      },
      _shiftCells: function (t, e, i) {
        t.forEach((t) => {
          let s = e > 0 ? i : 0;
          this._wrapShiftCell(t, s), (e -= t.size.outerWidth);
        });
      },
      _unshiftCells: function (t) {
        t && t.length && t.forEach((t) => this._wrapShiftCell(t, 0));
      },
      _wrapShiftCell: function (t, e) {
        this._renderCellPosition(t, t.x + this.slideableWidth * e);
      },
      integratePhysics: function () {
        (this.x += this.velocity), (this.velocity *= this.getFrictionFactor());
      },
      applyForce: function (t) {
        this.velocity += t;
      },
      getFrictionFactor: function () {
        return (
          1 -
          this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
        );
      },
      getRestingPosition: function () {
        return this.x + this.velocity / (1 - this.getFrictionFactor());
      },
      applyDragForce: function () {
        if (!this.isDraggable || !this.isPointerDown) return;
        let t = this.dragX - this.x - this.velocity;
        this.applyForce(t);
      },
      applySelectedAttraction: function () {
        if (
          (this.isDraggable && this.isPointerDown) ||
          this.isFreeScrolling ||
          !this.slides.length
        )
          return;
        let t =
          (-1 * this.selectedSlide.target - this.x) *
          this.options.selectedAttraction;
        this.applyForce(t);
      },
    };
    return e;
  }),
  (function (t, e) {
    if ("object" == typeof module && module.exports)
      module.exports = e(
        t,
        require("ev-emitter"),
        require("get-size"),
        require("fizzy-ui-utils"),
        require("./cell"),
        require("./slide"),
        require("./animate")
      );
    else {
      let i = t.Flickity;
      t.Flickity = e(
        t,
        t.EvEmitter,
        t.getSize,
        t.fizzyUIUtils,
        i.Cell,
        i.Slide,
        i.animatePrototype
      );
    }
  })(
    "undefined" != typeof window ? window : this,
    function (t, e, i, s, n, o, l) {
      const { getComputedStyle: h, console: r } = t;
      let { jQuery: a } = t,
        c = 0,
        d = {};
      function u(t, e) {
        let i = s.getQueryElement(t);
        if (i) {
          if (((this.element = i), this.element.flickityGUID)) {
            let t = d[this.element.flickityGUID];
            return t && t.option(e), t;
          }
          a && (this.$element = a(this.element)),
            (this.options = { ...this.constructor.defaults }),
            this.option(e),
            this._create();
        } else r && r.error(`Bad element for Flickity: ${i || t}`);
      }
      (u.defaults = {
        accessibility: !0,
        cellAlign: "center",
        freeScrollFriction: 0.075,
        friction: 0.28,
        namespaceJQueryEvents: !0,
        percentPosition: !0,
        resize: !0,
        selectedAttraction: 0.025,
        setGallerySize: !0,
      }),
        (u.create = {});
      let p = u.prototype;
      Object.assign(p, e.prototype),
        (p._create = function () {
          let { resize: e, watchCSS: i, rightToLeft: s } = this.options,
            n = (this.guid = ++c);
          (this.element.flickityGUID = n),
            (d[n] = this),
            (this.selectedIndex = 0),
            (this.restingFrames = 0),
            (this.x = 0),
            (this.velocity = 0),
            (this.beginMargin = s ? "marginRight" : "marginLeft"),
            (this.endMargin = s ? "marginLeft" : "marginRight"),
            (this.viewport = document.createElement("div")),
            (this.viewport.class = "flickity-viewport"),
            this._createSlider(),
            (this.focusableElems = [this.element]),
            (e || i) && t.addEventListener("resize", this);
          for (let t in this.options.on) {
            let e = this.options.on[t];
            this.on(t, e);
          }
          for (let t in u.create) u.create[t].call(this);
          i ? this.watchCSS() : this.activate();
        }),
        (p.option = function (t) {
          Object.assign(this.options, t);
        }),
        (p.activate = function () {
          if (this.isActive) return;
          (this.isActive = !0),
            this.element.classList.add("flickity-enabled"),
            this.options.rightToLeft &&
              this.element.classList.add("flickity-rtl"),
            this.getSize();
          let t = this._filterFindCellElements(this.element.children);
          this.slider.append(...t),
            this.viewport.append(this.slider),
            this.element.append(this.viewport),
            this.reloadCells(),
            this.options.accessibility &&
              ((this.element.tabIndex = 0),
              this.element.addEventListener("keydown", this)),
            this.emitEvent("activate"),
            this.selectInitialIndex(),
            (this.isInitActivated = !0),
            this.dispatchEvent("ready");
        }),
        (p._createSlider = function () {
          let t = document.createElement("div");
          (t.class = "flickity-slider"), (this.slider = t);
        }),
        (p._filterFindCellElements = function (t) {
          return s.filterFindElements(t, this.options.cellSelector);
        }),
        (p.reloadCells = function () {
          (this.cells = this._makeCells(this.slider.children)),
            this.positionCells(),
            this._updateWrapShiftCells(),
            this.setGallerySize();
        }),
        (p._makeCells = function (t) {
          return this._filterFindCellElements(t).map((t) => new n(t));
        }),
        (p.getLastCell = function () {
          return this.cells[this.cells.length - 1];
        }),
        (p.getLastSlide = function () {
          return this.slides[this.slides.length - 1];
        }),
        (p.positionCells = function () {
          this._sizeCells(this.cells), this._positionCells(0);
        }),
        (p._positionCells = function (t) {
          (t = t || 0), (this.maxCellHeight = (t && this.maxCellHeight) || 0);
          let e = 0;
          if (t > 0) {
            let i = this.cells[t - 1];
            e = i.x + i.size.outerWidth;
          }
          this.cells.slice(t).forEach((t) => {
            (t.x = e),
              this._renderCellPosition(t, e),
              (e += t.size.outerWidth),
              (this.maxCellHeight = Math.max(
                t.size.outerHeight,
                this.maxCellHeight
              ));
          }),
            (this.slideableWidth = e),
            this.updateSlides(),
            this._containSlides(),
            (this.slidesWidth = this.cells.length
              ? this.getLastSlide().target - this.slides[0].target
              : 0);
        }),
        (p._renderCellPosition = function (t, e) {
          let i = e * (this.options.rightToLeft ? -1 : 1);
          this.options.percentPosition &&
            (i *= this.size.innerWidth / t.size.width);
          let s = this.getPositionValue(i);
          t.element.style.transform = `translateX( ${s} )`;
        }),
        (p._sizeCells = function (t) {
          t.forEach((t) => t.getSize());
        }),
        (p.updateSlides = function () {
          if (((this.slides = []), !this.cells.length)) return;
          let { beginMargin: t, endMargin: e } = this,
            i = new o(t, e, this.cellAlign);
          this.slides.push(i);
          let s = this._getCanCellFit();
          this.cells.forEach((n, l) => {
            if (!i.cells.length) return void i.addCell(n);
            let h =
              i.outerWidth - i.firstMargin + (n.size.outerWidth - n.size[e]);
            s(l, h) ||
              (i.updateTarget(),
              (i = new o(t, e, this.cellAlign)),
              this.slides.push(i)),
              i.addCell(n);
          }),
            i.updateTarget(),
            this.updateSelectedSlide();
        }),
        (p._getCanCellFit = function () {
          let { groupCells: t } = this.options;
          if (!t) return () => !1;
          if ("number" == typeof t) {
            let e = parseInt(t, 10);
            return (t) => t % e != 0;
          }
          let e = 1,
            i = "string" == typeof t && t.match(/^(\d+)%$/);
          i && (e = parseInt(i[1], 10) / 100);
          let s = (this.size.innerWidth + 1) * e;
          return (t, e) => e <= s;
        }),
        (p._init = p.reposition =
          function () {
            this.positionCells(), this.positionSliderAtSelected();
          }),
        (p.getSize = function () {
          (this.size = i(this.element)),
            this.setCellAlign(),
            (this.cursorPosition = this.size.innerWidth * this.cellAlign);
        });
      let f = { left: 0, center: 0.5, right: 1 };
      (p.setCellAlign = function () {
        let { cellAlign: t, rightToLeft: e } = this.options,
          i = f[t];
        (this.cellAlign = void 0 !== i ? i : t),
          e && (this.cellAlign = 1 - this.cellAlign);
      }),
        (p.setGallerySize = function () {
          if (!this.options.setGallerySize) return;
          let t =
            this.options.adaptiveHeight && this.selectedSlide
              ? this.selectedSlide.height
              : this.maxCellHeight;
          this.viewport.style.height = `${t}px`;
        }),
        (p._updateWrapShiftCells = function () {
          if (((this.isWrapping = this.getIsWrapping()), !this.isWrapping))
            return;
          this._unshiftCells(this.beforeShiftCells),
            this._unshiftCells(this.afterShiftCells);
          let t = this.cursorPosition,
            e = this.cells.length - 1;
          this.beforeShiftCells = this._getGapCells(t, e, -1);
          let i = this.size.innerWidth - this.cursorPosition;
          this.afterShiftCells = this._getGapCells(i, 0, 1);
        }),
        (p.getIsWrapping = function () {
          let { wrapAround: t } = this.options;
          if (!t || this.slides.length < 2) return !1;
          if ("fill" !== t) return !0;
          let e = this.slideableWidth - this.size.innerWidth;
          if (e > this.size.innerWidth) return !0;
          for (let t of this.cells) if (t.size.outerWidth > e) return !1;
          return !0;
        }),
        (p._getGapCells = function (t, e, i) {
          let s = [];
          for (; t > 0; ) {
            let n = this.cells[e];
            if (!n) break;
            s.push(n), (e += i), (t -= n.size.outerWidth);
          }
          return s;
        }),
        (p._containSlides = function () {
          if (!(this.options.contain && !this.isWrapping && this.cells.length))
            return;
          let t = this.slideableWidth - this.getLastCell().size[this.endMargin];
          if (t < this.size.innerWidth)
            this.slides.forEach((e) => {
              e.target = t * this.cellAlign;
            });
          else {
            let e = this.cursorPosition + this.cells[0].size[this.beginMargin],
              i = t - this.size.innerWidth * (1 - this.cellAlign);
            this.slides.forEach((t) => {
              (t.target = Math.max(t.target, e)),
                (t.target = Math.min(t.target, i));
            });
          }
        }),
        (p.dispatchEvent = function (t, e, i) {
          let s = e ? [e].concat(i) : i;
          if ((this.emitEvent(t, s), a && this.$element)) {
            let s = (t += this.options.namespaceJQueryEvents
              ? ".flickity"
              : "");
            if (e) {
              let i = new a.Event(e);
              (i.type = t), (s = i);
            }
            this.$element.trigger(s, i);
          }
        });
      const g = [
        "dragStart",
        "dragMove",
        "dragEnd",
        "pointerDown",
        "pointerMove",
        "pointerEnd",
        "staticClick",
      ];
      let m = p.emitEvent;
      (p.emitEvent = function (t, e) {
        if ("staticClick" === t) {
          let t = this.getParentCell(e[0].target),
            i = t && t.element,
            s = t && this.cells.indexOf(t);
          e = e.concat(i, s);
        }
        if ((m.call(this, t, e), !g.includes(t) || !a || !this.$element))
          return;
        t += this.options.namespaceJQueryEvents ? ".flickity" : "";
        let i = e.shift(0),
          s = new a.Event(i);
        (s.type = t), this.$element.trigger(s, e);
      }),
        (p.select = function (t, e, i) {
          if (!this.isActive) return;
          if (
            ((t = parseInt(t, 10)),
            this._wrapSelect(t),
            (this.isWrapping || e) && (t = s.modulo(t, this.slides.length)),
            !this.slides[t])
          )
            return;
          let n = this.selectedIndex;
          (this.selectedIndex = t),
            this.updateSelectedSlide(),
            i ? this.positionSliderAtSelected() : this.startAnimation(),
            this.options.adaptiveHeight && this.setGallerySize(),
            this.dispatchEvent("select", null, [t]),
            t !== n && this.dispatchEvent("change", null, [t]);
        }),
        (p._wrapSelect = function (t) {
          if (!this.isWrapping) return;
          const {
            selectedIndex: e,
            slideableWidth: i,
            slides: { length: n },
          } = this;
          if (!this.isDragSelect) {
            let i = s.modulo(t, n),
              o = Math.abs(i - e),
              l = Math.abs(i + n - e),
              h = Math.abs(i - n - e);
            l < o ? (t += n) : h < o && (t -= n);
          }
          t < 0 ? (this.x -= i) : t >= n && (this.x += i);
        }),
        (p.previous = function (t, e) {
          this.select(this.selectedIndex - 1, t, e);
        }),
        (p.next = function (t, e) {
          this.select(this.selectedIndex + 1, t, e);
        }),
        (p.updateSelectedSlide = function () {
          let t = this.slides[this.selectedIndex];
          t &&
            (this.unselectSelectedSlide(),
            (this.selectedSlide = t),
            t.select(),
            (this.selectedCells = t.cells),
            (this.selectedElements = t.getCellElements()),
            (this.selectedCell = t.cells[0]),
            (this.selectedElement = this.selectedElements[0]));
        }),
        (p.unselectSelectedSlide = function () {
          this.selectedSlide && this.selectedSlide.unselect();
        }),
        (p.selectInitialIndex = function () {
          let t = this.options.initialIndex;
          if (this.isInitActivated)
            return void this.select(this.selectedIndex, !1, !0);
          if (t && "string" == typeof t) {
            if (this.queryCell(t)) return void this.selectCell(t, !1, !0);
          }
          let e = 0;
          t && this.slides[t] && (e = t), this.select(e, !1, !0);
        }),
        (p.selectCell = function (t, e, i) {
          let s = this.queryCell(t);
          if (!s) return;
          let n = this.getCellSlideIndex(s);
          this.select(n, e, i);
        }),
        (p.getCellSlideIndex = function (t) {
          let e = this.slides.find((e) => e.cells.includes(t));
          return this.slides.indexOf(e);
        }),
        (p.getCell = function (t) {
          for (let e of this.cells) if (e.element === t) return e;
        }),
        (p.getCells = function (t) {
          return (t = s.makeArray(t))
            .map((t) => this.getCell(t))
            .filter(Boolean);
        }),
        (p.getCellElements = function () {
          return this.cells.map((t) => t.element);
        }),
        (p.getParentCell = function (t) {
          let e = this.getCell(t);
          if (e) return e;
          let i = t.closest(".flickity-slider > *");
          return this.getCell(i);
        }),
        (p.getAdjacentCellElements = function (t, e) {
          if (!t) return this.selectedSlide.getCellElements();
          e = void 0 === e ? this.selectedIndex : e;
          let i = this.slides.length,
            n = [];
          for (let o = e - t; o <= e + t; o++) {
            let t = this.isWrapping ? s.modulo(o, i) : o,
              e = this.slides[t];
            e && (n = n.concat(e.getCellElements()));
          }
          return n;
        }),
        (p.queryCell = function (t) {
          if ("number" == typeof t) return this.cells[t];
          return (
            "string" == typeof t &&
              !t.match(/^[#.]?[\d/]/) &&
              (t = this.element.querySelector(t)),
            this.getCell(t)
          );
        }),
        (p.uiChange = function () {
          this.emitEvent("uiChange");
        }),
        (p.onresize = function () {
          this.watchCSS(), this.resize();
        }),
        s.debounceMethod(u, "onresize", 150),
        (p.resize = function () {
          if (!this.isActive || this.isAnimating || this.isDragging) return;
          this.getSize(),
            this.isWrapping && (this.x = s.modulo(this.x, this.slideableWidth)),
            this.positionCells(),
            this._updateWrapShiftCells(),
            this.setGallerySize(),
            this.emitEvent("resize");
          let t = this.selectedElements && this.selectedElements[0];
          this.selectCell(t, !1, !0);
        }),
        (p.watchCSS = function () {
          if (!this.options.watchCSS) return;
          h(this.element, ":after").content.includes("flickity")
            ? this.activate()
            : this.deactivate();
        }),
        (p.onkeydown = function (t) {
          let { activeElement: e } = document,
            i = u.keyboardHandlers[t.key];
          this.options.accessibility &&
            e &&
            i &&
            this.focusableElems.some((t) => e === t) &&
            i.call(this);
        }),
        (u.keyboardHandlers = {
          ArrowLeft: function () {
            this.uiChange(),
              this[this.options.rightToLeft ? "next" : "previous"]();
          },
          ArrowRight: function () {
            this.uiChange(),
              this[this.options.rightToLeft ? "previous" : "next"]();
          },
        }),
        (p.focus = function () {
          this.element.focus({ preventScroll: !0 });
        }),
        (p.deactivate = function () {
          this.isActive &&
            (this.element.classList.remove("flickity-enabled"),
            this.element.classList.remove("flickity-rtl"),
            this.unselectSelectedSlide(),
            this.cells.forEach((t) => t.destroy()),
            this.viewport.remove(),
            this.element.append(...this.slider.children),
            this.options.accessibility &&
              (this.element.removeAttribute("tabIndex"),
              this.element.removeEventListener("keydown", this)),
            (this.isActive = !1),
            this.emitEvent("deactivate"));
        }),
        (p.destroy = function () {
          this.deactivate(),
            t.removeEventListener("resize", this),
            this.allOff(),
            this.emitEvent("destroy"),
            a && this.$element && a.removeData(this.element, "flickity"),
            delete this.element.flickityGUID,
            delete d[this.guid];
        }),
        Object.assign(p, l),
        (u.data = function (t) {
          if ((t = s.getQueryElement(t))) return d[t.flickityGUID];
        }),
        s.htmlInit(u, "flickity");
      let { jQueryBridget: v } = t;
      return (
        a && v && v("flickity", u, a),
        (u.setJQuery = function (t) {
          a = t;
        }),
        (u.Cell = n),
        (u.Slide = o),
        u
      );
    }
  ),
  (function (t, e) {
    "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("./core"),
          require("unidragger"),
          require("fizzy-ui-utils")
        ))
      : (t.Flickity = e(t, t.Flickity, t.Unidragger, t.fizzyUIUtils));
  })("undefined" != typeof window ? window : this, function (t, e, i, s) {
    Object.assign(e.defaults, { draggable: ">1", dragThreshold: 3 });
    let n = e.prototype;
    function o() {
      return { x: t.pageXOffset, y: t.pageYOffset };
    }
    return (
      Object.assign(n, i.prototype),
      (n.touchActionValue = ""),
      (e.create.drag = function () {
        this.on("activate", this.onActivateDrag),
          this.on("uiChange", this._uiChangeDrag),
          this.on("deactivate", this.onDeactivateDrag),
          this.on("cellChange", this.updateDraggable),
          this.on("pointerDown", this.handlePointerDown),
          this.on("pointerUp", this.handlePointerUp),
          this.on("pointerDown", this.handlePointerDone),
          this.on("dragStart", this.handleDragStart),
          this.on("dragMove", this.handleDragMove),
          this.on("dragEnd", this.handleDragEnd),
          this.on("staticClick", this.handleStaticClick);
      }),
      (n.onActivateDrag = function () {
        (this.handles = [this.viewport]),
          this.bindHandles(),
          this.updateDraggable();
      }),
      (n.onDeactivateDrag = function () {
        this.unbindHandles(), this.element.classList.remove("is-draggable");
      }),
      (n.updateDraggable = function () {
        ">1" === this.options.draggable
          ? (this.isDraggable = this.slides.length > 1)
          : (this.isDraggable = this.options.draggable),
          this.element.classList.toggle("is-draggable", this.isDraggable);
      }),
      (n._uiChangeDrag = function () {
        delete this.isFreeScrolling;
      }),
      (n.handlePointerDown = function (e) {
        if (!this.isDraggable) return void this.bindActivePointerEvents(e);
        let i = "touchstart" === e.type,
          s = "touch" === e.pointerType,
          n = e.target.matches("input, textarea, select");
        i || s || n || e.preventDefault(),
          n || this.focus(),
          document.activeElement !== this.element &&
            document.activeElement.blur(),
          (this.dragX = this.x),
          this.viewport.classList.add("is-pointer-down"),
          (this.pointerDownScroll = o()),
          t.addEventListener("scroll", this),
          this.bindActivePointerEvents(e);
      }),
      (n.hasDragStarted = function (t) {
        return Math.abs(t.x) > this.options.dragThreshold;
      }),
      (n.handlePointerUp = function () {
        delete this.isTouchScrolling,
          this.viewport.classList.remove("is-pointer-down");
      }),
      (n.handlePointerDone = function () {
        t.removeEventListener("scroll", this), delete this.pointerDownScroll;
      }),
      (n.handleDragStart = function () {
        this.isDraggable &&
          ((this.dragStartPosition = this.x),
          this.startAnimation(),
          t.removeEventListener("scroll", this));
      }),
      (n.handleDragMove = function (t, e, i) {
        if (!this.isDraggable) return;
        t.preventDefault(), (this.previousDragX = this.dragX);
        let s = this.options.rightToLeft ? -1 : 1;
        this.isWrapping && (i.x %= this.slideableWidth);
        let n = this.dragStartPosition + i.x * s;
        if (!this.isWrapping) {
          let t = Math.max(-this.slides[0].target, this.dragStartPosition);
          n = n > t ? 0.5 * (n + t) : n;
          let e = Math.min(-this.getLastSlide().target, this.dragStartPosition);
          n = n < e ? 0.5 * (n + e) : n;
        }
        (this.dragX = n), (this.dragMoveTime = new Date());
      }),
      (n.handleDragEnd = function () {
        if (!this.isDraggable) return;
        let { freeScroll: t } = this.options;
        t && (this.isFreeScrolling = !0);
        let e = this.dragEndRestingSelect();
        if (t && !this.isWrapping) {
          let t = this.getRestingPosition();
          this.isFreeScrolling =
            -t > this.slides[0].target && -t < this.getLastSlide().target;
        } else
          t || e !== this.selectedIndex || (e += this.dragEndBoostSelect());
        delete this.previousDragX,
          (this.isDragSelect = this.isWrapping),
          this.select(e),
          delete this.isDragSelect;
      }),
      (n.dragEndRestingSelect = function () {
        let t = this.getRestingPosition(),
          e = Math.abs(this.getSlideDistance(-t, this.selectedIndex)),
          i = this._getClosestResting(t, e, 1),
          s = this._getClosestResting(t, e, -1);
        return i.distance < s.distance ? i.index : s.index;
      }),
      (n._getClosestResting = function (t, e, i) {
        let s = this.selectedIndex,
          n = 1 / 0,
          o =
            this.options.contain && !this.isWrapping
              ? (t, e) => t <= e
              : (t, e) => t < e;
        for (
          ;
          o(e, n) &&
          ((s += i), (n = e), null !== (e = this.getSlideDistance(-t, s)));

        )
          e = Math.abs(e);
        return { distance: n, index: s - i };
      }),
      (n.getSlideDistance = function (t, e) {
        let i = this.slides.length,
          n = this.options.wrapAround && i > 1,
          o = n ? s.modulo(e, i) : e,
          l = this.slides[o];
        if (!l) return null;
        let h = n ? this.slideableWidth * Math.floor(e / i) : 0;
        return t - (l.target + h);
      }),
      (n.dragEndBoostSelect = function () {
        if (
          void 0 === this.previousDragX ||
          !this.dragMoveTime ||
          new Date() - this.dragMoveTime > 100
        )
          return 0;
        let t = this.getSlideDistance(-this.dragX, this.selectedIndex),
          e = this.previousDragX - this.dragX;
        return t > 0 && e > 0 ? 1 : t < 0 && e < 0 ? -1 : 0;
      }),
      (n.onscroll = function () {
        let t = o(),
          e = this.pointerDownScroll.x - t.x,
          i = this.pointerDownScroll.y - t.y;
        (Math.abs(e) > 3 || Math.abs(i) > 3) && this.pointerDone();
      }),
      e
    );
  }),
  (function (t, e) {
    "object" == typeof module && module.exports
      ? (module.exports = e(require("./core")))
      : e(t.Flickity);
  })("undefined" != typeof window ? window : this, function (t) {
    const e = "http://www.w3.org/2000/svg";
    function i(t, e, i) {
      (this.increment = t),
        (this.direction = e),
        (this.isPrevious = "previous" === t),
        (this.isLeft = "left" === e),
        this._create(i);
    }
    (i.prototype._create = function (t) {
      let e = (this.element = document.createElement("button"));
      e.class = `flickity-button flickity-prev-next-button ${this.increment}`;
      let i = this.isPrevious ? "Previous" : "Next";
      e.setAttribute("type", "button"),
        e.setAttribute("aria-label", i),
        this.disable();
      let s = this.createSVG(i, t);
      e.append(s);
    }),
      (i.prototype.createSVG = function (t, i) {
        let s = document.createElementNS(e, "svg");
        s.setAttribute("class", "flickity-button-icon"),
          s.setAttribute("viewBox", "0 0 100 100");
        let n = document.createElementNS(e, "title");
        n.append(t);
        let o = document.createElementNS(e, "path"),
          l = (function (t) {
            if ("string" == typeof t) return t;
            let { x0: e, x1: i, x2: s, x3: n, y1: o, y2: l } = t;
            return `M ${e}, 50\n    L ${i}, ${o + 50}\n    L ${s}, ${
              l + 50
            }\n    L ${n}, 50\n    L ${s}, ${50 - l}\n    L ${i}, ${
              50 - o
            }\n    Z`;
          })(i);
        return (
          o.setAttribute("d", l),
          o.setAttribute("class", "arrow"),
          this.isLeft ||
            o.setAttribute("transform", "translate(100, 100) rotate(180)"),
          s.append(n, o),
          s
        );
      }),
      (i.prototype.enable = function () {
        this.element.removeAttribute("disabled");
      }),
      (i.prototype.disable = function () {
        this.element.setAttribute("disabled", !0);
      }),
      Object.assign(t.defaults, {
        prevNextButtons: !0,
        arrowShape: { x0: 10, x1: 60, y1: 50, x2: 70, y2: 40, x3: 30 },
      }),
      (t.create.prevNextButtons = function () {
        if (!this.options.prevNextButtons) return;
        let { rightToLeft: t, arrowShape: e } = this.options,
          s = t ? "right" : "left",
          n = t ? "left" : "right";
        (this.prevButton = new i("previous", s, e)),
          (this.nextButton = new i("next", n, e)),
          this.focusableElems.push(this.prevButton.element),
          this.focusableElems.push(this.nextButton.element),
          (this.handlePrevButtonClick = () => {
            this.uiChange(), this.previous();
          }),
          (this.handleNextButtonClick = () => {
            this.uiChange(), this.next();
          }),
          this.on("activate", this.activatePrevNextButtons),
          this.on("select", this.updatePrevNextButtons);
      });
    let s = t.prototype;
    return (
      (s.updatePrevNextButtons = function () {
        let t = this.slides.length ? this.slides.length - 1 : 0;
        this.updatePrevNextButton(this.prevButton, 0),
          this.updatePrevNextButton(this.nextButton, t);
      }),
      (s.updatePrevNextButton = function (t, e) {
        if (this.isWrapping && this.slides.length > 1) return void t.enable();
        let i = this.selectedIndex !== e;
        t[i ? "enable" : "disable"](),
          !i && document.activeElement === t.element && this.focus();
      }),
      (s.activatePrevNextButtons = function () {
        this.prevButton.element.addEventListener(
          "click",
          this.handlePrevButtonClick
        ),
          this.nextButton.element.addEventListener(
            "click",
            this.handleNextButtonClick
          ),
          this.element.prepend(
            this.prevButton.element,
            this.nextButton.element
          ),
          this.on("deactivate", this.deactivatePrevNextButtons);
      }),
      (s.deactivatePrevNextButtons = function () {
        this.prevButton.element.remove(),
          this.nextButton.element.remove(),
          this.prevButton.element.removeEventListener(
            "click",
            this.handlePrevButtonClick
          ),
          this.nextButton.element.removeEventListener(
            "click",
            this.handleNextButtonClick
          ),
          this.off("deactivate", this.deactivatePrevNextButtons);
      }),
      (t.PrevNextButton = i),
      t
    );
  }),
  (function (t, e) {
    "object" == typeof module && module.exports
      ? (module.exports = e(require("./core"), require("fizzy-ui-utils")))
      : e(t.Flickity, t.fizzyUIUtils);
  })("undefined" != typeof window ? window : this, function (t, e) {
    function i() {
      (this.holder = document.createElement("div")),
        (this.holder.class = "flickity-page-dots"),
        (this.dots = []);
    }
    (i.prototype.setDots = function (t) {
      let e = t - this.dots.length;
      e > 0 ? this.addDots(e) : e < 0 && this.removeDots(-e);
    }),
      (i.prototype.addDots = function (t) {
        let e = new Array(t).fill().map((t, e) => {
          let i = document.createElement("button");
          i.setAttribute("type", "button");
          let s = e + 1 + this.dots.length;
          return (
            (i.class = "flickity-page-dot"),
            i.setAttribute("aria-label", `View slide ${s}`),
            i
          );
        });
        this.holder.append(...e), (this.dots = this.dots.concat(e));
      }),
      (i.prototype.removeDots = function (t) {
        this.dots.splice(this.dots.length - t, t).forEach((t) => t.remove());
      }),
      (i.prototype.updateSelected = function (t) {
        this.selectedDot &&
          (this.selectedDot.classList.remove("is-selected"),
          this.selectedDot.removeAttribute("aria-current")),
          this.dots.length &&
            ((this.selectedDot = this.dots[t]),
            this.selectedDot.classList.add("is-selected"),
            this.selectedDot.setAttribute("aria-current", "step"));
      }),
      (t.PageDots = i),
      Object.assign(t.defaults, { pageDots: !0 }),
      (t.create.pageDots = function () {
        this.options.pageDots &&
          ((this.pageDots = new i()),
          (this.handlePageDotsClick = this.onPageDotsClick.bind(this)),
          this.on("activate", this.activatePageDots),
          this.on("select", this.updateSelectedPageDots),
          this.on("cellChange", this.updatePageDots),
          this.on("resize", this.updatePageDots),
          this.on("deactivate", this.deactivatePageDots));
      });
    let s = t.prototype;
    return (
      (s.activatePageDots = function () {
        this.pageDots.setDots(this.slides.length),
          this.focusableElems.push(...this.pageDots.dots),
          this.pageDots.holder.addEventListener(
            "click",
            this.handlePageDotsClick
          ),
          this.element.append(this.pageDots.holder);
      }),
      (s.onPageDotsClick = function (t) {
        let e = this.pageDots.dots.indexOf(t.target);
        -1 !== e && (this.uiChange(), this.select(e));
      }),
      (s.updateSelectedPageDots = function () {
        this.pageDots.updateSelected(this.selectedIndex);
      }),
      (s.updatePageDots = function () {
        this.pageDots.dots.forEach((t) => {
          e.removeFrom(this.focusableElems, t);
        }),
          this.pageDots.setDots(this.slides.length),
          this.focusableElems.push(...this.pageDots.dots);
      }),
      (s.deactivatePageDots = function () {
        this.pageDots.holder.remove(),
          this.pageDots.holder.removeEventListener(
            "click",
            this.handlePageDotsClick
          );
      }),
      (t.PageDots = i),
      t
    );
  }),
  (function (t, e) {
    "object" == typeof module && module.exports
      ? (module.exports = e(require("./core")))
      : e(t.Flickity);
  })("undefined" != typeof window ? window : this, function (t) {
    function e(t, e) {
      (this.autoPlay = t),
        (this.onTick = e),
        (this.state = "stopped"),
        (this.onVisibilityChange = this.visibilityChange.bind(this)),
        (this.onVisibilityPlay = this.visibilityPlay.bind(this));
    }
    (e.prototype.play = function () {
      if ("playing" === this.state) return;
      document.hidden
        ? document.addEventListener("visibilitychange", this.onVisibilityPlay)
        : ((this.state = "playing"),
          document.addEventListener(
            "visibilitychange",
            this.onVisibilityChange
          ),
          this.tick());
    }),
      (e.prototype.tick = function () {
        if ("playing" !== this.state) return;
        let t = "number" == typeof this.autoPlay ? this.autoPlay : 3e3;
        this.clear(),
          (this.timeout = setTimeout(() => {
            this.onTick(), this.tick();
          }, t));
      }),
      (e.prototype.stop = function () {
        (this.state = "stopped"),
          this.clear(),
          document.removeEventListener(
            "visibilitychange",
            this.onVisibilityChange
          );
      }),
      (e.prototype.clear = function () {
        clearTimeout(this.timeout);
      }),
      (e.prototype.pause = function () {
        "playing" === this.state && ((this.state = "paused"), this.clear());
      }),
      (e.prototype.unpause = function () {
        "paused" === this.state && this.play();
      }),
      (e.prototype.visibilityChange = function () {
        this[document.hidden ? "pause" : "unpause"]();
      }),
      (e.prototype.visibilityPlay = function () {
        this.play(),
          document.removeEventListener(
            "visibilitychange",
            this.onVisibilityPlay
          );
      }),
      Object.assign(t.defaults, { pauseAutoPlayOnHover: !0 }),
      (t.create.player = function () {
        (this.player = new e(this.options.autoPlay, () => {
          this.next(!0);
        })),
          this.on("activate", this.activatePlayer),
          this.on("uiChange", this.stopPlayer),
          this.on("pointerDown", this.stopPlayer),
          this.on("deactivate", this.deactivatePlayer);
      });
    let i = t.prototype;
    return (
      (i.activatePlayer = function () {
        this.options.autoPlay &&
          (this.player.play(),
          this.element.addEventListener("mouseenter", this));
      }),
      (i.playPlayer = function () {
        this.player.play();
      }),
      (i.stopPlayer = function () {
        this.player.stop();
      }),
      (i.pausePlayer = function () {
        this.player.pause();
      }),
      (i.unpausePlayer = function () {
        this.player.unpause();
      }),
      (i.deactivatePlayer = function () {
        this.player.stop(),
          this.element.removeEventListener("mouseenter", this);
      }),
      (i.onmouseenter = function () {
        this.options.pauseAutoPlayOnHover &&
          (this.player.pause(),
          this.element.addEventListener("mouseleave", this));
      }),
      (i.onmouseleave = function () {
        this.player.unpause(),
          this.element.removeEventListener("mouseleave", this);
      }),
      (t.Player = e),
      t
    );
  }),
  (function (t, e) {
    "object" == typeof module && module.exports
      ? (module.exports = e(require("./core"), require("fizzy-ui-utils")))
      : e(t.Flickity, t.fizzyUIUtils);
  })("undefined" != typeof window ? window : this, function (t, e) {
    let i = t.prototype;
    return (
      (i.insert = function (t, e) {
        let i = this._makeCells(t);
        if (!i || !i.length) return;
        let s = this.cells.length;
        e = void 0 === e ? s : e;
        let n = (function (t) {
            let e = document.createDocumentFragment();
            return t.forEach((t) => e.appendChild(t.element)), e;
          })(i),
          o = e === s;
        if (o) this.slider.appendChild(n);
        else {
          let t = this.cells[e].element;
          this.slider.insertBefore(n, t);
        }
        if (0 === e) this.cells = i.concat(this.cells);
        else if (o) this.cells = this.cells.concat(i);
        else {
          let t = this.cells.splice(e, s - e);
          this.cells = this.cells.concat(i).concat(t);
        }
        this._sizeCells(i), this.cellChange(e), this.positionSliderAtSelected();
      }),
      (i.append = function (t) {
        this.insert(t, this.cells.length);
      }),
      (i.prepend = function (t) {
        this.insert(t, 0);
      }),
      (i.remove = function (t) {
        let i = this.getCells(t);
        if (!i || !i.length) return;
        let s = this.cells.length - 1;
        i.forEach((t) => {
          t.remove();
          let i = this.cells.indexOf(t);
          (s = Math.min(i, s)), e.removeFrom(this.cells, t);
        }),
          this.cellChange(s),
          this.positionSliderAtSelected();
      }),
      (i.cellSizeChange = function (t) {
        let e = this.getCell(t);
        if (!e) return;
        e.getSize();
        let i = this.cells.indexOf(e);
        this.cellChange(i);
      }),
      (i.cellChange = function (t) {
        let e = this.selectedElement;
        this._positionCells(t),
          this._updateWrapShiftCells(),
          this.setGallerySize();
        let i = this.getCell(e);
        i && (this.selectedIndex = this.getCellSlideIndex(i)),
          (this.selectedIndex = Math.min(
            this.slides.length - 1,
            this.selectedIndex
          )),
          this.emitEvent("cellChange", [t]),
          this.select(this.selectedIndex);
      }),
      t
    );
  }),
  (function (t, e) {
    "object" == typeof module && module.exports
      ? (module.exports = e(require("flickity"), require("fizzy-ui-utils")))
      : e(t.Flickity, t.fizzyUIUtils);
  })("undefined" != typeof window ? window : this, function (t, e) {
    t.create.fade = function () {
      (this.fadeIndex = this.selectedIndex),
        (this.prevSelectedIndex = this.selectedIndex),
        this.on("select", this.onSelectFade),
        this.on("dragEnd", this.onDragEndFade),
        this.on("settle", this.onSettleFade),
        this.on("activate", this.onActivateFade),
        this.on("deactivate", this.onDeactivateFade);
    };
    let i = t.prototype,
      s = i.updateSlides;
    (i.updateSlides = function () {
      s.apply(this, arguments),
        this.options.fade &&
          this.slides.forEach((t, e) => {
            let i = t.target - t.x,
              s = t.cells[0].x;
            t.cells.forEach((t) => {
              let e = t.x - s - i;
              this._renderCellPosition(t, e);
            });
          });
    }),
      (i.onSelectFade = function () {
        (this.fadeIndex = Math.min(
          this.prevSelectedIndex,
          this.slides.length - 1
        )),
          (this.prevSelectedIndex = this.selectedIndex);
      }),
      (i.onSettleFade = function () {
        delete this.didDragEnd, this.options.fade;
      }),
      (i.onDragEndFade = function () {
        this.didDragEnd = !0;
      }),
      (i.onActivateFade = function () {
        this.options.fade && this.element.classList.add("is-fade");
      }),
      (i.onDeactivateFade = function () {
        this.options.fade && this.element.classList.remove("is-fade");
      });
    let n = i.positionSlider;
    i.positionSlider = function () {
      this.options.fade
        ? (this.fadeSlides(), this.dispatchScrollEvent())
        : n.apply(this, arguments);
    };
    let o = i.positionSliderAtSelected;
    (i.positionSliderAtSelected = function () {
      this.options.fade && this.setTranslateX(0), o.apply(this, arguments);
    }),
      (i.fadeSlides = function () {
        if (this.slides.length < 2) return;
        let t = this.getFadeIndexes(),
          e = this.slides[t.a],
          i = this.slides[t.b],
          s = this.wrapDifference(e.target, i.target),
          n = this.wrapDifference(e.target, -this.x);
        n /= s;
        let o = t.a;
        this.isDragging && (o = n > 0.5 ? t.a : t.b);
        void 0 !== this.fadeHideIndex &&
          this.fadeHideIndex !== o &&
          this.fadeHideIndex !== t.a &&
          (this.fadeHideIndex, t.b);
        this.fadeHideIndex = o;
      }),
      (i.getFadeIndexes = function () {
        return this.isDragging || this.didDragEnd
          ? this.options.wrapAround
            ? this.getFadeDragWrapIndexes()
            : this.getFadeDragLimitIndexes()
          : { a: this.fadeIndex, b: this.selectedIndex };
      }),
      (i.getFadeDragWrapIndexes = function () {
        let t = this.slides.map(function (t, e) {
            return this.getSlideDistance(-this.x, e);
          }, this),
          i = t.map(function (t) {
            return Math.abs(t);
          }),
          s = Math.min(...i),
          n = i.indexOf(s),
          o = t[n],
          l = this.slides.length,
          h = o >= 0 ? 1 : -1;
        return { a: n, b: e.modulo(n + h, l) };
      }),
      (i.getFadeDragLimitIndexes = function () {
        let t = 0;
        for (let e = 0; e < this.slides.length - 1; e++) {
          let i = this.slides[e];
          if (-this.x < i.target) break;
          t = e;
        }
        return { a: t, b: t + 1 };
      }),
      (i.wrapDifference = function (t, e) {
        let i = e - t;
        if (!this.options.wrapAround) return i;
        let s = i + this.slideableWidth,
          n = i - this.slideableWidth;
        return (
          Math.abs(s) < Math.abs(i) && (i = s),
          Math.abs(n) < Math.abs(i) && (i = n),
          i
        );
      });
    let l = i._updateWrapShiftCells;
    i._updateWrapShiftCells = function () {
      this.options.fade
        ? (this.isWrapping = this.getIsWrapping())
        : l.apply(this, arguments);
    };
    let h = i.shiftWrapCells;
    return (
      (i.shiftWrapCells = function () {
        this.options.fade || h.apply(this, arguments);
      }),
      t
    );
  });
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t =
        "undefined" != typeof globalThis ? globalThis : t || self).SplitType =
        e());
})(this, function () {
  "use strict";
  function t(t, e) {
    return Object.getOwnPropertyNames(Object(t)).reduce((n, s) => {
      const i = Object.getOwnPropertyDescriptor(Object(t), s),
        o = Object.getOwnPropertyDescriptor(Object(e), s);
      return Object.defineProperty(n, s, o || i);
    }, {});
  }
  function e(t) {
    return "string" == typeof t;
  }
  function n(t) {
    return Array.isArray(t);
  }
  function s(s = {}) {
    const i = t(s);
    let o;
    return (
      void 0 !== i.types ? (o = i.types) : void 0 !== i.split && (o = i.split),
      void 0 !== o &&
        (i.types = (e(o) || n(o) ? String(o) : "")
          .split(",")
          .map((t) => String(t).trim())
          .filter((t) => /((line)|(word)|(char))/i.test(t))),
      (i.absolute || i.position) &&
        (i.absolute = i.absolute || /absolute/.test(s.position)),
      i
    );
  }
  function i(t) {
    const s = e(t) || n(t) ? String(t) : "";
    return {
      none: !s,
      lines: /line/i.test(s),
      words: /word/i.test(s),
      chars: /char/i.test(s),
    };
  }
  function o(t) {
    return null !== t && "object" == typeof t;
  }
  function r(t) {
    return o(t) && /^(1|3|11)$/.test(t.nodeType);
  }
  function l(t) {
    return n(t)
      ? t
      : null == t
      ? []
      : (function (t) {
          return (
            o(t) &&
            (function (t) {
              return "number" == typeof t && t > -1 && t % 1 == 0;
            })(t.length)
          );
        })(t)
      ? Array.prototype.slice.call(t)
      : [t];
  }
  function c(t) {
    let n = t;
    return (
      e(t) &&
        (n = /^(#[a-z]\w+)$/.test(t.trim())
          ? document.getElementById(t.trim().slice(1))
          : document.querySelectorAll(t)),
      l(n).reduce((t, e) => [...t, ...l(e).filter(r)], [])
    );
  }
  (() => {
    function t(...t) {
      const e = t.length;
      for (let n = 0; n < e; n++) {
        const e = t[n];
        1 === e.nodeType || 11 === e.nodeType
          ? this.appendChild(e)
          : this.appendChild(document.createTextNode(String(e)));
      }
    }
    function e(...t) {
      for (; this.lastChild; ) this.removeChild(this.lastChild);
      t.length && this.append(...t);
    }
    function n(...t) {
      const e = this.parentNode;
      let n = t.length;
      if (e)
        for (n || e.removeChild(this); n--; ) {
          let s = t[n];
          "object" != typeof s
            ? (s = this.ownerDocument.createTextNode(s))
            : s.parentNode && s.parentNode.removeChild(s),
            n
              ? e.insertBefore(this.previousSibling, s)
              : e.replaceChild(s, this);
        }
    }
    "undefined" != typeof Element &&
      (Element.prototype.append ||
        ((Element.prototype.append = t),
        (DocumentFragment.prototype.append = t)),
      Element.prototype.replaceChildren ||
        ((Element.prototype.replaceChildren = e),
        (DocumentFragment.prototype.replaceChildren = e)),
      Element.prototype.replaceWith ||
        ((Element.prototype.replaceWith = n),
        (DocumentFragment.prototype.replaceWith = n)));
  })();
  const { entries: d, keys: p, values: h } = Object,
    u = "_splittype",
    a = {};
  let f = 0;
  function g(t, e, n) {
    if (!o(t)) return console.warn("[data.set] owner is not an object"), null;
    const s = t[u] || (t[u] = ++f),
      i = a[s] || (a[s] = {});
    return (
      void 0 === n
        ? e &&
          Object.getPrototypeOf(e) === Object.prototype &&
          (a[s] = { ...i, ...e })
        : void 0 !== e && (i[e] = n),
      n
    );
  }
  function y(t, e) {
    const n = o(t) ? t[u] : null,
      s = (n && a[n]) || {};
    return void 0 === e ? s : s[e];
  }
  function m(t) {
    const e = t && t[u];
    e && (delete t[e], delete a[e]);
  }
  const w = "\\ud800-\\udfff",
    b = "\\u0300-\\u036f\\ufe20-\\ufe23",
    C = "\\u20d0-\\u20f0",
    E = "\\ufe0e\\ufe0f",
    S = "[\\ud800-\\udfff]",
    x = `[${b}\\u20d0-\\u20f0]`,
    $ = "\\ud83c[\\udffb-\\udfff]",
    v = "[^\\ud800-\\udfff]",
    j = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    O = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    W = "\\u200d",
    T = `(?:${x}|${$})` + "?",
    N = "[\\ufe0e\\ufe0f]?",
    D = N + T + ("(?:\\u200d(?:" + [v, j, O].join("|") + ")" + N + T + ")*"),
    R = `(?:${[`${v}${x}?`, x, j, O, S].join("|")}\n)`,
    k = RegExp(`${$}(?=${$})|${R}${D}`, "g"),
    A = RegExp(`[${[W, w, b, C, E].join("")}]`);
  function B(t) {
    return A.test(t);
  }
  function F(t) {
    return B(t)
      ? (function (t) {
          return t.match(k) || [];
        })(t)
      : (function (t) {
          return t.split("");
        })(t);
  }
  function L(t, n = "") {
    var s;
    return (t = null == (s = t) ? "" : String(s)) && e(t) && !n && B(t)
      ? F(t)
      : t.split(n);
  }
  function P(t, n) {
    const s = document.createElement(t);
    return n
      ? (Object.keys(n).forEach((t) => {
          const i = n[t],
            o = e(i) ? i.trim() : i;
          null !== o &&
            "" !== o &&
            ("children" === t ? s.append(...l(o)) : s.setAttribute(t, o));
        }),
        s)
      : s;
  }
  var H = {
    splitClass: "",
    lineClass: "line",
    wordClass: "word",
    charClass: "char",
    types: ["lines", "words", "chars"],
    absolute: !1,
    tagName: "div",
  };
  function M(e, n) {
    const s = i((n = t(H, n)).types),
      o = n.tagName,
      r = e.nodeValue,
      l = document.createDocumentFragment();
    let c = [],
      d = [];
    return (
      /^\s/.test(r) && l.append(" "),
      (c = (function (t, e = " ") {
        return (t ? String(t) : "").trim().replace(/\s+/g, " ").split(e);
      })(r).reduce((t, e, i, r) => {
        let c, p;
        return (
          s.chars &&
            (p = L(e).map((t) => {
              const e = P(o, {
                class: `${n.splitClass} ${n.charClass}`,
                style: "display: inline-block;",
                children: t,
              });
              return g(e, "isChar", !0), (d = [...d, e]), e;
            })),
          s.words || s.lines
            ? ((c = P(o, {
                class: `${n.wordClass} ${n.splitClass}`,
                style:
                  "display: inline-block; " +
                  (s.words && n.absolute ? "position: relative;" : ""),
                children: s.chars ? p : e,
              })),
              g(c, { isWord: !0, isWordStart: !0, isWordEnd: !0 }),
              l.appendChild(c))
            : p.forEach((t) => {
                l.appendChild(t);
              }),
          i < r.length - 1 && l.append(" "),
          s.words ? t.concat(c) : t
        );
      }, [])),
      /\s$/.test(r) && l.append(" "),
      e.replaceWith(l),
      { words: c, chars: d }
    );
  }
  function z(t, e) {
    const n = t.nodeType,
      s = { words: [], chars: [] };
    if (!/(1|3|11)/.test(n)) return s;
    if (3 === n && /\S/.test(t.nodeValue)) return M(t, e);
    const i = l(t.childNodes);
    if (i.length && (g(t, "isSplit", !0), !y(t).isRoot)) {
      (t.style.display = "inline-block"), (t.style.position = "relative");
      const e = t.nextSibling,
        n = t.previousSibling,
        s = t.textContent || "",
        i = e ? e.textContent : " ",
        o = n ? n.textContent : " ";
      g(t, {
        isWordEnd: /\s$/.test(s) || /^\s/.test(i),
        isWordStart: /^\s/.test(s) || /\s$/.test(o),
      });
    }
    return i.reduce((t, n) => {
      const { words: s, chars: i } = z(n, e);
      return { words: [...t.words, ...s], chars: [...t.chars, ...i] };
    }, s);
  }
  function V(t) {
    y(t).isWord
      ? (m(t), t.replaceWith(...t.childNodes))
      : l(t.children).forEach((t) => V(t));
  }
  function q(t, e, n) {
    const s = i(e.types),
      o = e.tagName,
      r = t.getElementsByTagName("*"),
      c = [];
    let d,
      p,
      h,
      u = [],
      a = null,
      f = [];
    const m = t.parentElement,
      w = t.nextElementSibling,
      b = document.createDocumentFragment(),
      C = window.getComputedStyle(t),
      E = C.textAlign,
      S = 0.2 * parseFloat(C.fontSize);
    return (
      e.absolute &&
        ((h = { left: t.offsetLeft, top: t.offsetTop, width: t.offsetWidth }),
        (p = t.offsetWidth),
        (d = t.offsetHeight),
        g(t, { cssWidth: t.style.width, cssHeight: t.style.height })),
      l(r).forEach((i) => {
        const o = i.parentElement === t,
          {
            width: r,
            height: l,
            top: d,
            left: p,
          } = (function (t, e, n, s) {
            if (!n.absolute) return { top: e ? t.offsetTop : null };
            const i = t.offsetParent,
              [o, r] = s;
            let l = 0,
              c = 0;
            if (i && i !== document.body) {
              const t = i.getBoundingClientRect();
              (l = t.x + o), (c = t.y + r);
            }
            const {
              width: d,
              height: p,
              x: h,
              y: u,
            } = t.getBoundingClientRect();
            return { width: d, height: p, top: u + r - c, left: h + o - l };
          })(i, o, e, n);
        /^br$/i.test(i.nodeName) ||
          (s.lines &&
            o &&
            ((null === a || d - a >= S) && ((a = d), c.push((u = []))),
            u.push(i)),
          e.absolute && g(i, { top: d, left: p, width: r, height: l }));
      }),
      m && m.removeChild(t),
      s.lines &&
        ((f = c.map((t) => {
          const n = P(o, {
            class: `${e.splitClass} ${e.lineClass}`,
            style: `display: block; text-align: ${E}; width: 100%;`,
          });
          g(n, "isLine", !0);
          const s = { height: 0, top: 1e4 };
          return (
            b.appendChild(n),
            t.forEach((t, e, i) => {
              const { isWordEnd: o, top: r, height: l } = y(t),
                c = i[e + 1];
              (s.height = Math.max(s.height, l)),
                (s.top = Math.min(s.top, r)),
                n.appendChild(t),
                o && y(c).isWordStart && n.append(" ");
            }),
            e.absolute && g(n, { height: s.height, top: s.top }),
            n
          );
        })),
        s.words || V(b),
        t.replaceChildren(b)),
      e.absolute &&
        ((t.style.width = (t.style.width || p) + "px"),
        (t.style.height = d + "px"),
        l(r).forEach((t) => {
          const { isLine: e, top: n, left: s, width: i, height: o } = y(t),
            r = y(t.parentElement),
            l = !e && r.isLine;
          (t.style.top = (l ? n - r.top : n) + "px"),
            (t.style.left = e ? h.left + "px" : s - (l ? h.left : 0) + "px"),
            (t.style.height = o + "px"),
            (t.style.width = e ? h.width + "px" : i + "px"),
            (t.style.position = "absolute");
        })),
      m && (w ? m.insertBefore(t, w) : m.appendChild(t)),
      f
    );
  }
  let I = t(H, {});
  class X {
    static get data() {
      return a;
    }
    static get defaults() {
      return I;
    }
    static set defaults(e) {
      I = t(I, s(e));
    }
    static setDefaults(e) {
      return (I = t(I, s(e))), H;
    }
    static revert(t) {
      c(t).forEach((t) => {
        const { isSplit: e, html: n, cssWidth: s, cssHeight: i } = y(t);
        e &&
          ((t.innerHTML = n),
          (t.style.width = s || ""),
          (t.style.height = i || ""),
          m(t));
      });
    }
    static create(t, e) {
      return new X(t, e);
    }
    constructor(e, n) {
      (this.isSplit = !1),
        (this.settings = t(I, s(n))),
        (this.elements = c(e)),
        this.split();
    }
    split(e) {
      this.revert(),
        this.elements.forEach((t) => {
          g(t, "html", t.innerHTML);
        }),
        (this.lines = []),
        (this.words = []),
        (this.chars = []);
      const n = [window.pageXOffset, window.pageYOffset];
      void 0 !== e && (this.settings = t(this.settings, s(e)));
      const o = i(this.settings.types);
      o.none ||
        (this.elements.forEach((t) => {
          g(t, "isRoot", !0);
          const { words: e, chars: n } = z(t, this.settings);
          (this.words = [...this.words, ...e]),
            (this.chars = [...this.chars, ...n]);
        }),
        this.elements.forEach((t) => {
          if (o.lines || this.settings.absolute) {
            const e = q(t, this.settings, n);
            this.lines = [...this.lines, ...e];
          }
        }),
        (this.isSplit = !0),
        window.scrollTo(n[0], n[1]),
        d(a).forEach(([t, { isRoot: e, isSplit: n }]) => {
          (e && n) || ((a[t] = null), delete a[t]);
        }));
    }
    revert() {
      this.isSplit &&
        ((this.lines = null),
        (this.words = null),
        (this.chars = null),
        (this.isSplit = !1)),
        X.revert(this.elements);
    }
  }
  return X;
});
!(function (t, i) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = i())
    : "function" == typeof define && define.amd
    ? define(i)
    : ((t =
        "undefined" != typeof globalThis
          ? globalThis
          : t || self).PhotoSwipeLightbox = i());
})(this, function () {
  "use strict";
  function t(t, i, s) {
    const h = document.createElement(i);
    return t && (h.class = t), s && s.appendChild(h), h;
  }
  function i(t, i, s) {
    (t.style.width = "number" == typeof i ? `${i}px` : i),
      (t.style.height = "number" == typeof s ? `${s}px` : s);
  }
  const s = "idle",
    h = "loading",
    e = "loaded",
    n = "error";
  function o(t, i, s = document) {
    let h = [];
    if (t instanceof Element) h = [t];
    else if (t instanceof NodeList || Array.isArray(t)) h = Array.from(t);
    else {
      const e = "string" == typeof t ? t : i;
      e && (h = Array.from(s.querySelectorAll(e)));
    }
    return h;
  }
  function r() {
    return !(!navigator.vendor || !navigator.vendor.match(/apple/i));
  }
  class a {
    constructor(t, i) {
      (this.type = t),
        (this.defaultPrevented = !1),
        i && Object.assign(this, i);
    }
    preventDefault() {
      this.defaultPrevented = !0;
    }
  }
  class c {
    constructor(i, s) {
      if (
        ((this.element = t(
          "pswp__img pswp__img--placeholder",
          i ? "img" : "div",
          s
        )),
        i)
      ) {
        const t = this.element;
        (t.decoding = "async"),
          (t.alt = ""),
          (t.src = i),
          t.setAttribute("role", "presentation");
      }
      this.element.setAttribute("aria-hidden", "true");
    }
    setDisplayedSize(t, s) {
      this.element &&
        ("IMG" === this.element.tagName
          ? (i(this.element, 250, "auto"),
            (this.element.style.transformOrigin = "0 0"),
            (this.element.style.transform = (function (t, i, s) {
              let h = `translate3d(${t}px,${i || 0}px,0)`;
              return void 0 !== s && (h += ` scale3d(${s},${s},1)`), h;
            })(0, 0, t / 250)))
          : i(this.element, t, s));
    }
    destroy() {
      this.element?.parentNode && this.element.remove(), (this.element = null);
    }
  }
  class l {
    constructor(t, i, h) {
      (this.instance = i),
        (this.data = t),
        (this.index = h),
        (this.element = void 0),
        (this.placeholder = void 0),
        (this.slide = void 0),
        (this.displayedImageWidth = 0),
        (this.displayedImageHeight = 0),
        (this.width = Number(this.data.w) || Number(this.data.width) || 0),
        (this.height = Number(this.data.h) || Number(this.data.height) || 0),
        (this.isAttached = !1),
        (this.hasSlide = !1),
        (this.isDecoding = !1),
        (this.state = s),
        this.data.type
          ? (this.type = this.data.type)
          : this.data.src
          ? (this.type = "image")
          : (this.type = "html"),
        this.instance.dispatch("contentInit", { content: this });
    }
    removePlaceholder() {
      this.placeholder &&
        !this.keepPlaceholder() &&
        setTimeout(() => {
          this.placeholder &&
            (this.placeholder.destroy(), (this.placeholder = void 0));
        }, 1e3);
    }
    load(i, s) {
      if (this.slide && this.usePlaceholder())
        if (this.placeholder) {
          const t = this.placeholder.element;
          t && !t.parentElement && this.slide.container.prepend(t);
        } else {
          const t = this.instance.applyFilters(
            "placeholderSrc",
            !(!this.data.msrc || !this.slide.isFirstSlide) && this.data.msrc,
            this
          );
          this.placeholder = new c(t, this.slide.container);
        }
      (this.element && !s) ||
        this.instance.dispatch("contentLoad", { content: this, isLazy: i })
          .defaultPrevented ||
        (this.isImageContent()
          ? ((this.element = t("pswp__img", "img")),
            this.displayedImageWidth && this.loadImage(i))
          : ((this.element = t("pswp__content", "div")),
            (this.element.innerHTML = this.data.html || "")),
        s && this.slide && this.slide.updateContentSize(!0));
    }
    loadImage(t) {
      if (
        !this.isImageContent() ||
        !this.element ||
        this.instance.dispatch("contentLoadImage", { content: this, isLazy: t })
          .defaultPrevented
      )
        return;
      const i = this.element;
      this.updateSrcsetSizes(),
        this.data.srcset && (i.srcset = this.data.srcset),
        (i.src = this.data.src ?? ""),
        (i.alt = this.data.alt ?? ""),
        (this.state = h),
        i.complete
          ? this.onLoaded()
          : ((i.onload = () => {
              this.onLoaded();
            }),
            (i.onerror = () => {
              this.onError();
            }));
    }
    setSlide(t) {
      (this.slide = t), (this.hasSlide = !0), (this.instance = t.pswp);
    }
    onLoaded() {
      (this.state = e),
        this.slide &&
          this.element &&
          (this.instance.dispatch("loadComplete", {
            slide: this.slide,
            content: this,
          }),
          this.slide.isActive &&
            this.slide.heavyAppended &&
            !this.element.parentNode &&
            (this.append(), this.slide.updateContentSize(!0)),
          (this.state !== e && this.state !== n) || this.removePlaceholder());
    }
    onError() {
      (this.state = n),
        this.slide &&
          (this.displayError(),
          this.instance.dispatch("loadComplete", {
            slide: this.slide,
            isError: !0,
            content: this,
          }),
          this.instance.dispatch("loadError", {
            slide: this.slide,
            content: this,
          }));
    }
    isLoading() {
      return this.instance.applyFilters(
        "isContentLoading",
        this.state === h,
        this
      );
    }
    isError() {
      return this.state === n;
    }
    isImageContent() {
      return "image" === this.type;
    }
    setDisplayedSize(t, s) {
      if (
        this.element &&
        (this.placeholder && this.placeholder.setDisplayedSize(t, s),
        !this.instance.dispatch("contentResize", {
          content: this,
          width: t,
          height: s,
        }).defaultPrevented &&
          (i(this.element, t, s), this.isImageContent() && !this.isError()))
      ) {
        const i = !this.displayedImageWidth && t;
        (this.displayedImageWidth = t),
          (this.displayedImageHeight = s),
          i ? this.loadImage(!1) : this.updateSrcsetSizes(),
          this.slide &&
            this.instance.dispatch("imageSizeChange", {
              slide: this.slide,
              width: t,
              height: s,
              content: this,
            });
      }
    }
    isZoomable() {
      return this.instance.applyFilters(
        "isContentZoomable",
        this.isImageContent() && this.state !== n,
        this
      );
    }
    updateSrcsetSizes() {
      if (!this.isImageContent() || !this.element || !this.data.srcset) return;
      const t = this.element,
        i = this.instance.applyFilters(
          "srcsetSizesWidth",
          this.displayedImageWidth,
          this
        );
      (!t.dataset.largestUsedSize ||
        i > parseInt(t.dataset.largestUsedSize, 10)) &&
        ((t.sizes = i + "px"), (t.dataset.largestUsedSize = String(i)));
    }
    usePlaceholder() {
      return this.instance.applyFilters(
        "useContentPlaceholder",
        this.isImageContent(),
        this
      );
    }
    lazyLoad() {
      this.instance.dispatch("contentLazyLoad", { content: this })
        .defaultPrevented || this.load(!0);
    }
    keepPlaceholder() {
      return this.instance.applyFilters(
        "isKeepingPlaceholder",
        this.isLoading(),
        this
      );
    }
    destroy() {
      (this.hasSlide = !1),
        (this.slide = void 0),
        this.instance.dispatch("contentDestroy", { content: this })
          .defaultPrevented ||
          (this.remove(),
          this.placeholder &&
            (this.placeholder.destroy(), (this.placeholder = void 0)),
          this.isImageContent() &&
            this.element &&
            ((this.element.onload = null),
            (this.element.onerror = null),
            (this.element = void 0)));
    }
    displayError() {
      if (this.slide) {
        let i = t("pswp__error-msg", "div");
        (i.innerText = this.instance.options?.errorMsg ?? ""),
          (i = this.instance.applyFilters("contentErrorElement", i, this)),
          (this.element = t("pswp__content pswp__error-msg-container", "div")),
          this.element.appendChild(i),
          (this.slide.container.innerText = ""),
          this.slide.container.appendChild(this.element),
          this.slide.updateContentSize(!0),
          this.removePlaceholder();
      }
    }
    append() {
      if (this.isAttached || !this.element) return;
      if (((this.isAttached = !0), this.state === n))
        return void this.displayError();
      if (
        this.instance.dispatch("contentAppend", { content: this })
          .defaultPrevented
      )
        return;
      const t = "decode" in this.element;
      this.isImageContent()
        ? t && this.slide && (!this.slide.isActive || r())
          ? ((this.isDecoding = !0),
            this.element
              .decode()
              .catch(() => {})
              .finally(() => {
                (this.isDecoding = !1), this.appendImage();
              }))
          : this.appendImage()
        : this.slide &&
          !this.element.parentNode &&
          this.slide.container.appendChild(this.element);
    }
    activate() {
      !this.instance.dispatch("contentActivate", { content: this })
        .defaultPrevented &&
        this.slide &&
        (this.isImageContent() && this.isDecoding && !r()
          ? this.appendImage()
          : this.isError() && this.load(!1, !0),
        this.slide.holderElement &&
          this.slide.holderElement.setAttribute("aria-hidden", "false"));
    }
    deactivate() {
      this.instance.dispatch("contentDeactivate", { content: this }),
        this.slide &&
          this.slide.holderElement &&
          this.slide.holderElement.setAttribute("aria-hidden", "true");
    }
    remove() {
      (this.isAttached = !1),
        this.instance.dispatch("contentRemove", { content: this })
          .defaultPrevented ||
          (this.element && this.element.parentNode && this.element.remove(),
          this.placeholder &&
            this.placeholder.element &&
            this.placeholder.element.remove());
    }
    appendImage() {
      this.isAttached &&
        (this.instance.dispatch("contentAppendImage", { content: this })
          .defaultPrevented ||
          (this.slide &&
            this.element &&
            !this.element.parentNode &&
            this.slide.container.appendChild(this.element),
          (this.state !== e && this.state !== n) || this.removePlaceholder()));
    }
  }
  function d(t, i, s, h, e) {
    let n = 0;
    if (i.paddingFn) n = i.paddingFn(s, h, e)[t];
    else if (i.padding) n = i.padding[t];
    else {
      const s = "padding" + t[0].toUpperCase() + t.slice(1);
      i[s] && (n = i[s]);
    }
    return Number(n) || 0;
  }
  class u {
    constructor(t, i, s, h) {
      (this.pswp = h),
        (this.options = t),
        (this.itemData = i),
        (this.index = s),
        (this.panAreaSize = null),
        (this.elementSize = null),
        (this.fit = 1),
        (this.fill = 1),
        (this.vFill = 1),
        (this.initial = 1),
        (this.secondary = 1),
        (this.max = 1),
        (this.min = 1);
    }
    update(t, i, s) {
      const h = { x: t, y: i };
      (this.elementSize = h), (this.panAreaSize = s);
      const e = s.x / h.x,
        n = s.y / h.y;
      (this.fit = Math.min(1, e < n ? e : n)),
        (this.fill = Math.min(1, e > n ? e : n)),
        (this.vFill = Math.min(1, n)),
        (this.initial = this.t()),
        (this.secondary = this.i()),
        (this.max = Math.max(this.initial, this.secondary, this.o())),
        (this.min = Math.min(this.fit, this.initial, this.secondary)),
        this.pswp &&
          this.pswp.dispatch("zoomLevelsUpdate", {
            zoomLevels: this,
            slideData: this.itemData,
          });
    }
    l(t) {
      const i = t + "ZoomLevel",
        s = this.options[i];
      if (s)
        return "function" == typeof s
          ? s(this)
          : "fill" === s
          ? this.fill
          : "fit" === s
          ? this.fit
          : Number(s);
    }
    i() {
      let t = this.l("secondary");
      return (
        t ||
        ((t = Math.min(1, 3 * this.fit)),
        this.elementSize &&
          t * this.elementSize.x > 4e3 &&
          (t = 4e3 / this.elementSize.x),
        t)
      );
    }
    t() {
      return this.l("initial") || this.fit;
    }
    o() {
      return this.l("max") || Math.max(1, 4 * this.fit);
    }
  }
  function p(t, i, s) {
    const h = i.createContentFromData(t, s);
    let e;
    const { options: n } = i;
    if (n) {
      let o;
      (e = new u(n, t, -1)),
        (o = i.pswp
          ? i.pswp.viewportSize
          : (function (t, i) {
              if (t.getViewportSizeFn) {
                const s = t.getViewportSizeFn(t, i);
                if (s) return s;
              }
              return {
                x: document.documentElement.clientWidth,
                y: window.innerHeight,
              };
            })(n, i));
      const r = (function (t, i, s, h) {
        return {
          x: i.x - d("left", t, i, s, h) - d("right", t, i, s, h),
          y: i.y - d("top", t, i, s, h) - d("bottom", t, i, s, h),
        };
      })(n, o, t, s);
      e.update(h.width, h.height, r);
    }
    return (
      h.lazyLoad(),
      e &&
        h.setDisplayedSize(
          Math.ceil(h.width * e.initial),
          Math.ceil(h.height * e.initial)
        ),
      h
    );
  }
  return class extends class extends class {
    constructor() {
      (this.u = {}),
        (this.p = {}),
        (this.pswp = void 0),
        (this.options = void 0);
    }
    addFilter(t, i, s = 100) {
      this.p[t] || (this.p[t] = []),
        this.p[t]?.push({ fn: i, priority: s }),
        this.p[t]?.sort((t, i) => t.priority - i.priority),
        this.pswp?.addFilter(t, i, s);
    }
    removeFilter(t, i) {
      this.p[t] && (this.p[t] = this.p[t].filter((t) => t.fn !== i)),
        this.pswp && this.pswp.removeFilter(t, i);
    }
    applyFilters(t, ...i) {
      return (
        this.p[t]?.forEach((t) => {
          i[0] = t.fn.apply(this, i);
        }),
        i[0]
      );
    }
    on(t, i) {
      this.u[t] || (this.u[t] = []), this.u[t]?.push(i), this.pswp?.on(t, i);
    }
    off(t, i) {
      this.u[t] && (this.u[t] = this.u[t].filter((t) => i !== t)),
        this.pswp?.off(t, i);
    }
    dispatch(t, i) {
      if (this.pswp) return this.pswp.dispatch(t, i);
      const s = new a(t, i);
      return (
        this.u[t]?.forEach((t) => {
          t.call(this, s);
        }),
        s
      );
    }
  } {
    getNumItems() {
      let t = 0;
      const i = this.options?.dataSource;
      i && "length" in i
        ? (t = i.length)
        : i &&
          "gallery" in i &&
          (i.items || (i.items = this.m(i.gallery)),
          i.items && (t = i.items.length));
      const s = this.dispatch("numItems", { dataSource: i, numItems: t });
      return this.applyFilters("numItems", s.numItems, i);
    }
    createContentFromData(t, i) {
      return new l(t, this, i);
    }
    getItemData(t) {
      const i = this.options?.dataSource;
      let s = {};
      Array.isArray(i)
        ? (s = i[t])
        : i &&
          "gallery" in i &&
          (i.items || (i.items = this.m(i.gallery)), (s = i.items[t]));
      let h = s;
      h instanceof Element && (h = this.g(h));
      const e = this.dispatch("itemData", { itemData: h || {}, index: t });
      return this.applyFilters("itemData", e.itemData, t);
    }
    m(t) {
      return this.options?.children || this.options?.childSelector
        ? o(this.options.children, this.options.childSelector, t) || []
        : [t];
    }
    g(t) {
      const i = { element: t },
        s = "A" === t.tagName ? t : t.querySelector("a");
      if (s) {
        (i.src = s.dataset.pswpSrc || s.href),
          s.dataset.pswpSrcset && (i.srcset = s.dataset.pswpSrcset),
          (i.width = s.dataset.pswpWidth
            ? parseInt(s.dataset.pswpWidth, 10)
            : 0),
          (i.height = s.dataset.pswpHeight
            ? parseInt(s.dataset.pswpHeight, 10)
            : 0),
          (i.w = i.width),
          (i.h = i.height),
          s.dataset.pswpType && (i.type = s.dataset.pswpType);
        const h = t.querySelector("img");
        h &&
          ((i.msrc = h.currentSrc || h.src),
          (i.alt = h.getAttribute("alt") ?? "")),
          (s.dataset.pswpCropped || s.dataset.cropped) && (i.thumbCropped = !0);
      }
      return this.applyFilters("domItemData", i, t, s);
    }
    lazyLoadData(t, i) {
      return p(t, this, i);
    }
  } {
    constructor(t) {
      super(),
        (this.options = t || {}),
        (this.v = 0),
        (this.shouldOpen = !1),
        (this._ = void 0),
        (this.onThumbnailsClick = this.onThumbnailsClick.bind(this));
    }
    init() {
      o(this.options.gallery, this.options.gallerySelector).forEach((t) => {
        t.addEventListener("click", this.onThumbnailsClick, !1);
      });
    }
    onThumbnailsClick(t) {
      if (
        (function (t) {
          return (
            ("button" in t && 1 === t.button) ||
            t.ctrlKey ||
            t.metaKey ||
            t.altKey ||
            t.shiftKey
          );
        })(t) ||
        window.pswp
      )
        return;
      let i = { x: t.clientX, y: t.clientY };
      i.x || i.y || (i = null);
      let s = this.getClickedIndex(t);
      s = this.applyFilters("clickedIndex", s, t, this);
      const h = { gallery: t.currentTarget };
      s >= 0 && (t.preventDefault(), this.loadAndOpen(s, h, i));
    }
    getClickedIndex(t) {
      if (this.options.getClickedIndexFn)
        return this.options.getClickedIndexFn.call(this, t);
      const i = t.target,
        s = o(
          this.options.children,
          this.options.childSelector,
          t.currentTarget
        ).findIndex((t) => t === i || t.contains(i));
      return -1 !== s
        ? s
        : this.options.children || this.options.childSelector
        ? -1
        : 0;
    }
    loadAndOpen(t, i, s) {
      return (
        !window.pswp &&
        ((this.options.index = t),
        (this.options.initialPointerPos = s),
        (this.shouldOpen = !0),
        this.preload(t, i),
        !0)
      );
    }
    preload(t, i) {
      const { options: s } = this;
      i && (s.dataSource = i);
      const h = [],
        e = typeof s.pswpModule;
      if (
        "function" == typeof (n = s.pswpModule) &&
        n.prototype &&
        n.prototype.goTo
      )
        h.push(Promise.resolve(s.pswpModule));
      else {
        if ("string" === e)
          throw new Error("pswpModule as string is no longer supported");
        if ("function" !== e) throw new Error("pswpModule is not valid");
        h.push(s.pswpModule());
      }
      var n;
      "function" == typeof s.openPromise && h.push(s.openPromise()),
        !1 !== s.preloadFirstSlide &&
          t >= 0 &&
          (this._ = (function (t, i) {
            const s = i.getItemData(t);
            if (
              !i.dispatch("lazyLoadSlide", { index: t, itemData: s })
                .defaultPrevented
            )
              return p(s, i, t);
          })(t, this));
      const o = ++this.v;
      Promise.all(h).then((t) => {
        if (this.shouldOpen) {
          const i = t[0];
          this.I(i, o);
        }
      });
    }
    I(t, i) {
      if (i !== this.v && this.shouldOpen) return;
      if (((this.shouldOpen = !1), window.pswp)) return;
      const s =
        "object" == typeof t
          ? new t.default(this.options)
          : new t(this.options);
      (this.pswp = s),
        (window.pswp = s),
        Object.keys(this.u).forEach((t) => {
          this.u[t]?.forEach((i) => {
            s.on(t, i);
          });
        }),
        Object.keys(this.p).forEach((t) => {
          this.p[t]?.forEach((i) => {
            s.addFilter(t, i.fn, i.priority);
          });
        }),
        this._ && (s.contentLoader.addToCache(this._), (this._ = void 0)),
        s.on("destroy", () => {
          (this.pswp = void 0), delete window.pswp;
        }),
        s.init();
    }
    destroy() {
      this.pswp?.destroy(),
        (this.shouldOpen = !1),
        (this.u = {}),
        o(this.options.gallery, this.options.gallerySelector).forEach((t) => {
          t.removeEventListener("click", this.onThumbnailsClick, !1);
        });
    }
  };
});
!(function () {
  "use strict";
  function G(a, b) {
    (null == b || b > a.length) && (b = a.length);
    for (var c = 0, d = Array(b); c < b; c++) d[c] = a[c];
    return d;
  }
  function aa(b, d) {
    var f =
      ("undefined" != typeof Symbol && b[Symbol.iterator]) || b["@@iterator"];
    if (!f) {
      if (
        Array.isArray(b) ||
        (f = (function (a, b) {
          if (a) {
            if ("string" == typeof a) return G(a, b);
            var c = Object.prototype.toString.call(a).slice(8, -1);
            return (
              "Object" === c && a.constructor && (c = a.constructor.name),
              "Map" === c || "Set" === c
                ? Array.from(a)
                : "Arguments" === c ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
                ? G(a, b)
                : void 0
            );
          }
        })(b)) ||
        (d && b && "number" == typeof b.length)
      ) {
        f && (b = f);
        var g = 0,
          h = function () {};
        return {
          s: h,
          n: function () {
            return g >= b.length ? { done: !0 } : { done: !1, value: b[g++] };
          },
          e: function (a) {
            throw a;
          },
          f: h,
        };
      }
      throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }
    var a,
      j = !0,
      k = !1;
    return {
      s: function () {
        f = f.call(b);
      },
      n: function () {
        var a = f.next();
        return (j = a.done), a;
      },
      e: function (b) {
        (k = !0), (a = b);
      },
      f: function () {
        try {
          j || null == f.return || f.return();
        } finally {
          if (k) throw a;
        }
      },
    };
  }
  var n = function (b, c) {
      var d = function (a) {
          for (var b = 0, c = a.length; b < c; b++) f(a[b]);
        },
        f = function (a) {
          var b = a.target,
            c = a.attributeName,
            d = a.oldValue;
          b.attributeChangedCallback(c, d, b.getAttribute(c));
        };
      return function (g, e) {
        var h = g.constructor.observedAttributes;
        return (
          h &&
            b(e).then(function () {
              new c(d).observe(g, {
                attributes: !0,
                attributeOldValue: !0,
                attributeFilter: h,
              });
              for (var b = 0, i = h.length; b < i; b++)
                g.hasAttribute(h[b]) &&
                  f({ target: g, attributeName: h[b], oldValue: null });
            }),
          g
        );
      };
    },
    ba = !0,
    e = !1,
    o = "querySelectorAll",
    a = "querySelectorAll",
    l = self,
    r = l.document,
    c = l.Element,
    u = l.MutationObserver,
    s = l.Set,
    f = l.WeakMap,
    d = function (b) {
      return a in b;
    },
    h = [].filter,
    i = function (b) {
      var j = new f(),
        k = function (d, e) {
          var f;
          if (e)
            for (
              var g,
                h = (function (a) {
                  return (
                    a.matches || a.webkitMatchesSelector || a.msMatchesSelector
                  );
                })(d),
                k = 0,
                l = p.length;
              k < l;
              k++
            )
              h.call(d, (g = p[k])) &&
                (j.has(d) || j.set(d, new s()),
                (f = j.get(d)).has(g) || (f.add(g), b.handle(d, e, g)));
          else
            j.has(d) &&
              ((f = j.get(d)),
              j.delete(d),
              f.forEach(function (a) {
                b.handle(d, e, a);
              }));
        },
        i = function (a) {
          for (
            var b =
                !(1 < arguments.length && void 0 !== arguments[1]) ||
                arguments[1],
              c = 0,
              d = a.length;
            c < d;
            c++
          )
            k(a[c], b);
        },
        p = b.query,
        l = b.root || r,
        g = (function (a) {
          var b =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : document,
            d =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : MutationObserver,
            g =
              3 < arguments.length && void 0 !== arguments[3]
                ? arguments[3]
                : ["*"],
            i = function b(e, g, j, i, c, k) {
              var l,
                m = aa(e);
              try {
                for (m.s(); !(l = m.n()).done; ) {
                  var d = l.value;
                  (k || o in d) &&
                    (c
                      ? j.has(d) || (j.add(d), i.delete(d), a(d, c))
                      : i.has(d) || (i.add(d), j.delete(d), a(d, c)),
                    k || b(d[o](g), g, j, i, c, ba));
                }
              } catch (a) {
                m.e(a);
              } finally {
                m.f();
              }
            },
            c = new d(function (b) {
              if (g.length) {
                var c,
                  j = g.join(","),
                  a = new Set(),
                  k = new Set(),
                  l = aa(b);
                try {
                  for (l.s(); !(c = l.n()).done; ) {
                    var m = c.value,
                      f = m.addedNodes,
                      d = m.removedNodes;
                    i(d, j, a, k, e, e), i(f, j, a, k, ba, e);
                  }
                } catch (a) {
                  l.e(a);
                } finally {
                  l.f();
                }
              }
            }),
            f = c.observe;
          return (
            (c.observe = function (a) {
              return f.call(c, a, { subtree: ba, childList: ba });
            })(b),
            c
          );
        })(k, l, u, p),
        m = c.prototype.attachShadow;
      return (
        m &&
          (c.prototype.attachShadow = function (a) {
            var b = m.call(this, a);
            return g.observe(b), b;
          }),
        p.length && i(l[a](p)),
        {
          drop: function (a) {
            for (var b = 0, c = a.length; b < c; b++) j.delete(a[b]);
          },
          flush: function () {
            for (var a = g.takeRecords(), b = 0, c = a.length; b < c; b++)
              i(h.call(a[b].removedNodes, d), !1),
                i(h.call(a[b].addedNodes, d), !0);
          },
          observer: g,
          parse: i,
        }
      );
    },
    p = self,
    v = p.document,
    g = p.Map,
    m = p.MutationObserver,
    t = p.Object,
    b = p.Set,
    w = p.WeakMap,
    y = p.Element,
    A = p.HTMLElement,
    E = p.Node,
    M = p.Error,
    N = p.TypeError,
    C = p.Reflect,
    O = t.defineProperty,
    q = t.keys,
    D = t.getOwnPropertyNames,
    I = t.setPrototypeOf,
    P = !self.customElements,
    S = function (c) {
      for (var d = q(c), e = [], f = new b(), g = d.length, h = 0; h < g; h++) {
        e[h] = c[d[h]];
        try {
          delete c[d[h]];
        } catch (a) {
          f.add(h);
        }
      }
      return function () {
        for (var b = 0; b < g; b++) f.has(b) || (c[d[b]] = e[b]);
      };
    };
  if (P) {
    var L = function () {
        var a = this.constructor;
        if (!H.has(a)) throw new N("Illegal constructor");
        var b = H.get(a);
        if (U) return B(U, b);
        var c = x.call(v, b);
        return B(I(c, a.prototype), b);
      },
      x = v.createElement,
      H = new g(),
      T = new g(),
      $ = new g(),
      j = new g(),
      R = [],
      V = i({
        query: R,
        handle: function (b, c, d) {
          var e = $.get(d);
          if (c && !e.isPrototypeOf(b)) {
            var f = S(b);
            U = I(b, e);
            try {
              new e.constructor();
            } finally {
              (U = null), f();
            }
          }
          var g = "".concat(c ? "" : "dis", "connectedCallback");
          g in e && b[g]();
        },
      }).parse,
      U = null,
      _ = function (a) {
        if (!T.has(a)) {
          var b,
            c = new Promise(function (a) {
              b = a;
            });
          T.set(a, { $: c, _: b });
        }
        return T.get(a).$;
      },
      B = n(_, m);
    (self.customElements = {
      define: function (a, b) {
        if (j.has(a))
          throw new M(
            'the name "'.concat(a, '" has already been used with this registry')
          );
        H.set(b, a),
          $.set(a, b.prototype),
          j.set(a, b),
          R.push(a),
          _(a).then(function () {
            V(v.querySelectorAll(a));
          }),
          T.get(a)._(b);
      },
      get: function (a) {
        return j.get(a);
      },
      whenDefined: _,
    }),
      O((L.prototype = A.prototype), "constructor", { value: L }),
      (self.HTMLElement = L),
      (v.createElement = function (a, b) {
        var c = b && b.is,
          d = c ? j.get(c) : j.get(a);
        return d ? new d() : x.call(v, a);
      }),
      "isConnected" in E.prototype ||
        O(E.prototype, "isConnected", {
          configurable: !0,
          get: function () {
            return !(
              this.ownerDocument.compareDocumentPosition(this) &
              this.DOCUMENT_POSITION_DISCONNECTED
            );
          },
        });
  } else if ((P = !self.customElements.get("extends-br")))
    try {
      var F = function a() {
        return self.Reflect.construct(HTMLBRElement, [], a);
      };
      F.prototype = HTMLLIElement.prototype;
      self.customElements.define("extends-br", F, { extends: "br" }),
        (P =
          0 >
          v
            .createElement("br", { is: "extends-br" })
            .outerHTML.indexOf("extends-br"));
      var z = self.customElements,
        J = z.get,
        K = z.whenDefined;
      self.customElements.whenDefined = function (a) {
        var b = this;
        return K.call(this, a).then(function (c) {
          return c || J.call(b, a);
        });
      };
    } catch (a) {}
  if (P) {
    var Q = function (a) {
        var b = ga.get(a);
        pa(b.querySelectorAll(this), a.isConnected);
      },
      X = self.customElements,
      Y = v.createElement,
      Z = X.define,
      ca = X.get,
      da = X.upgrade,
      ea = C || {
        construct: function (a) {
          return a.call(this);
        },
      },
      fa = ea.construct,
      ga = new w(),
      ha = new b(),
      ia = new g(),
      ja = new g(),
      ka = new g(),
      la = new g(),
      ma = [],
      na = [],
      oa = function (a) {
        return la.get(a) || ca.call(X, a);
      },
      pa = i({
        query: na,
        handle: function (b, c, d) {
          var e = ka.get(d);
          if (c && !e.isPrototypeOf(b)) {
            var f = S(b);
            ua = I(b, e);
            try {
              new e.constructor();
            } finally {
              (ua = null), f();
            }
          }
          var g = "".concat(c ? "" : "dis", "connectedCallback");
          g in e && b[g]();
        },
      }).parse,
      qa = i({
        query: ma,
        handle: function (a, b) {
          ga.has(a) &&
            (b ? ha.add(a) : ha.delete(a), na.length && Q.call(na, a));
        },
      }).parse,
      ra = y.prototype.attachShadow;
    ra &&
      (y.prototype.attachShadow = function (a) {
        var b = ra.call(this, a);
        return ga.set(this, b), b;
      });
    var sa = function (a) {
        if (!ja.has(a)) {
          var b,
            c = new Promise(function (a) {
              b = a;
            });
          ja.set(a, { $: c, _: b });
        }
        return ja.get(a).$;
      },
      ta = n(sa, m),
      ua = null;
    D(self)
      .filter(function (a) {
        return /^HTML.*Element$/.test(a);
      })
      .forEach(function (a) {
        function b() {
          var b = this.constructor;
          if (!ia.has(b)) throw new N("Illegal constructor");
          var d = ia.get(b),
            e = d.is,
            f = d.tag;
          if (e) {
            if (ua) return ta(ua, e);
            var g = Y.call(v, f);
            return g.setAttribute("is", e), ta(I(g, b.prototype), e);
          }
          return fa.call(this, c, [], b);
        }
        var c = self[a];
        O((b.prototype = c.prototype), "constructor", { value: b }),
          O(self, a, { value: b });
      }),
      (v.createElement = function (a, b) {
        var c = b && b.is;
        if (c) {
          var d = la.get(c);
          if (d && ia.get(d).tag === a) return new d();
        }
        var e = Y.call(v, a);
        return c && e.setAttribute("is", c), e;
      }),
      (X.get = oa),
      (X.whenDefined = sa),
      (X.upgrade = function (a) {
        var b = a.getAttribute("is");
        if (b) {
          var c = la.get(b);
          if (c) return void ta(I(a, c.prototype), b);
        }
        da.call(X, a);
      }),
      (X.define = function (a, b, c) {
        if (oa(a))
          throw new M(
            "'".concat(a, "' has already been defined as a custom element")
          );
        var d,
          e = c && c.extends;
        ia.set(b, e ? { is: a, tag: e } : { is: "", tag: a }),
          e
            ? ((d = "".concat(e, '[is="').concat(a, '"]')),
              ka.set(d, b.prototype),
              la.set(a, b),
              na.push(d))
            : (Z.apply(X, arguments), ma.push((d = a))),
          sa(a).then(function () {
            e
              ? (pa(v.querySelectorAll(d)), ha.forEach(Q, [d]))
              : qa(v.querySelectorAll(d));
          }),
          ja.get(a)._(b);
      });
  }
})();
class LazyImage extends HTMLImageElement {
  constructor() {
    super();
  }
  connectedCallback() {
    if (null !== this.media) {
      window.addEventListener("resize", this.handleLazy.bind(this));
      const a = new MutationObserver((a) => {
        a.forEach((a) => {
          (a.attributeName.includes("src") ||
            a.attributeName.includes("srcset")) &&
            this.handleLazy();
        });
      });
      a.observe(this, { attributes: !0 }), this.handleLazy();
    }
  }
  get media() {
    return (this._media = this._media || this.closest(".media"));
  }
  handleLazy() {
    this.complete ||
      this.classList.contains("loaded") ||
      (this.media.classList.add("loading"),
      this.addEventListener(
        "load",
        () => {
          const a = () => {
            this.classList.add("loaded"),
              this.media.classList.remove("loading");
          };
          window.requestIdleCallback
            ? window.requestIdleCallback(a, { timeout: 150 })
            : setTimeout(a);
        },
        !1
      ));
  }
}
customElements.define("lazy-image", LazyImage, { extends: "img" });
