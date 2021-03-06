"use strict";

function AnimCube3(e) {
  var t, r, n, o, a, f, l, i, u, c, s, h, v, d, g, m, b, M, p, k, L, w, y, R, S, A, T, D, F, E, x, B, U, I, P, C, X, W, Y, z, q, O, Q = [],
    Z = [],
    N = [],
    H = [],
    G = [],
    K = [],
    j = [
      [0, -1, 0],
      [0, 1, 0],
      [0, 0, -1],
      [0, 0, 1],
      [-1, 0, 0],
      [1, 0, 0]
    ],
    J = [
      [-1, -1, -1],
      [1, -1, -1],
      [1, -1, 1],
      [-1, -1, 1],
      [-1, 1, -1],
      [1, 1, -1],
      [1, 1, 1],
      [-1, 1, 1]
    ],
    V = [
      [0, 1, 2, 3],
      [4, 7, 6, 5],
      [0, 4, 5, 1],
      [2, 6, 7, 3],
      [0, 3, 7, 4],
      [1, 5, 6, 2]
    ],
    $ = [
      [0, 3, 2, 1],
      [0, 3, 2, 1],
      [3, 2, 1, 0],
      [3, 2, 1, 0],
      [0, 3, 2, 1],
      [0, 3, 2, 1]
    ],
    _ = [
      [2, 5, 3, 4],
      [4, 3, 5, 2],
      [4, 1, 5, 0],
      [5, 1, 4, 0],
      [0, 3, 1, 2],
      [2, 1, 3, 0]
    ],
    ee = [1, 1, -1, -1, -1, -1],
    te = [0, 0, -1],
    re = [1, 0, 0],
    ne = [],
    oe = [],
    ae = [],
    fe = [],
    le = !0,
    ie = [],
    ue = [],
    ce = [],
    se = !0,
    he = -1,
    ve = 6,
    de = 12,
    ge = !0,
    me = !1,
    be = !1,
    Me = !1,
    pe = !1,
    ke = !1,
    Le = 0,
    we = 0,
    ye = 0,
    Re = 0,
    Se = [3, 2, 0, 5, 1, 4],
    Ae = [
      [6, 3, 0, 7, 4, 1, 8, 5, 2],
      [2, 5, 8, 1, 4, 7, 0, 3, 6],
      [0, 1, 2, 3, 4, 5, 6, 7, 8],
      [0, 1, 2, 3, 4, 5, 6, 7, 8],
      [6, 3, 0, 7, 4, 1, 8, 5, 2],
      [0, 1, 2, 3, 4, 5, 6, 7, 8]
    ];

  function Te() {
    var e = Fe("config");
    null != e ? function(e) {
      var t = new XMLHttpRequest;
      t.onreadystatechange = function() {
        4 == t.readyState && (200 == t.status ? function(e) {
          for (var t = e.split("\n"), r = 0; r < t.length; r++) {
            var n = t[r].split("=");
            void 0 !== n[1] && (Q[n[0]] = n[1].trim())
          }
        }(t.responseText) : console.log("Error loading config file: " + e), De())
      }, t.open("GET", e, !0), t.send()
    }(e) : De()
  }

  function De() {
    Z[0] = Br(255, 128, 64), Z[1] = Br(255, 0, 0), Z[2] = Br(0, 255, 0), Z[3] = Br(0, 0, 255), Z[4] = Br(153, 153, 153), Z[5] = Br(170, 170, 68), Z[6] = Br(187, 119, 68), Z[7] = Br(153, 68, 68), Z[8] = Br(68, 119, 68), Z[9] = Br(0, 68, 119), Z[10] = Br(255, 255, 255), Z[11] = Br(255, 255, 0), Z[12] = Br(255, 96, 32), Z[13] = Br(208, 0, 0), Z[14] = Br(0, 144, 0), Z[15] = Br(32, 64, 208), Z[16] = Br(176, 176, 176), Z[17] = Br(80, 80, 80), Z[18] = Br(255, 0, 255), Z[19] = Br(0, 255, 255), Z[20] = Br(255, 160, 192), Z[21] = Br(32, 255, 16), Z[22] = Br(0, 0, 0), Z[23] = Br(128, 128, 128);
    var e = Fe("bgcolor");
    if (t = null != e && 6 == e.length && Ir(e) ? "#" + e : "gray", e = Fe("butbgcolor"), o = null != e && 6 == e.length && Ir(e) ? "#" + e : t, null != (e = Fe("colors")))
      for (var u = 0; u < 10 && u < e.length / 6; u++) Ir(e.substring(6 * u, 6 * u + 6)) && (Z[u] = "#" + e.substring(6 * u, 6 * u + 6));
    for (u = 0; u < 6; u++)
      for (var c = 0; c < 9; c++) N[u][c] = u + 10;
    if (null != (e = Fe("supercube")) && "1" == e) {
      pe = !0, Ee(.06);
      for (u = 0; u < 9; u++) N[0][u] = 22;
      null != (e = Fe("scw")) && ("1" == e ? ye = 1 : "2" == e && (ye = 2)), 1 == ye && (Z[10] = "#000000")
    }
    if (null != (e = Fe("gabbacolors")) && "1" == e && (1 == pe ? (Z[11] = "#fdcf00", Z[12] = "#fd4e0a", Z[13] = "#93000d", Z[14] = "#00702d", Z[15] = "#00347a") : (Ee(.06), Z[11] = "#ffd90a", Z[12] = "#ff4f0b", Z[13] = "#9e0b19", Z[14] = "#0b7d39", Z[15] = "#0b4186")), null != (e = Fe("borderwidth"))) {
      for (u = 0; u < e.length; u++) e.charAt(u) >= "0" && e.charAt(u) <= "9" && (Re = 10 * Re + parseInt(e[u]));
      Re >= 0 && Re <= 20 && Ee(Re / 100)
    }
    if (pe)
      for (u = 0; u < 6; u++)
        for (c = 0; c < 9; c++) H[u][c] = 0;
    var s = "lluu";
    if (null != (e = Fe("colorscheme")) && 6 == e.length)
      for (u = 0; u < 6; u++) {
        var h = 23;
        for (c = 0; c < 23; c++)
          if (e[u].toLowerCase() == "0123456789wyorgbldmcpnk".charAt(c)) {
            h = c;
            break
          } for (c = 0; c < 9; c++) N[u][c] = h
      }
    if ("1" == (e = Fe("scramble")) ? Le = 1 : "2" == e && (Le = 2), 2 == Le)
      for (u = 0; u < 6; u++)
        for (c = 0; c < 9; c++) G[u][c] = N[u][c], K[u][c] = H[u][c];
    if (0 == Le) {
      if (null != (e = Fe("pos")) && 54 == e.length) {
        s = "uuuuff", "gray" == t && (t = "white");
        for (u = 0; u < 6; u++) {
          var g = Se[u];
          for (c = 0; c < 9; c++) {
            var m = Ae[u][c];
            N[g][m] = 23;
            for (var b = 0; b < 14; b++)
              if (e.charAt(9 * u + c) == "DFECABdfecabgh".charAt(b)) {
                N[g][m] = b + 4;
                break
              }
          }
        }
      }
      if (null != (e = Fe("facelets")) && 54 == e.length)
        for (u = 0; u < 6; u++)
          for (c = 0; c < 9; c++) {
            N[u][c] = 23;
            for (b = 0; b < 23; b++)
              if (e[9 * u + c].toLowerCase() == "0123456789wyorgbldmcpnk".charAt(b)) {
                N[u][c] = b;
                break
              }
          }
      if (null != (e = Fe("superfacelets")) && 54 == e.length)
        for (u = 0; u < 6; u++)
          for (c = 0; c < 9; c++)
            for (b = 0; b < 4; b++)
              if (e[9 * u + c].toLowerCase() == "0123".charAt(b)) {
                H[u][c] = b;
                break
              }
    }
    if (null != (e = Fe("yz")) && "1" == e && (Me = !0), null != (e = Fe("randmoves"))) {
      var M = 0;
      for (u = 0; u < e.length; u++) e.charAt(u) >= "0" && e.charAt(u) <= "9" && (M = 10 * M + parseInt(e[u]));
      M > 0 && (we = M)
    }
    if (("random" == (e = Fe("move")) || Le > 0) && (e = pn(3, we)), ie = null == e ? [] : Ue(e, !0), U = 0, W = -1, 0 == Le && null != (e = Fe("initmove"))) {
      "random" == e && (e = pn(3, we));
      var w = "#" == e ? ie : Ue(e, !1);
      w.length > 0 && He(N, w[0], 0, w[0].length, !1)
    }
    if (e = Fe("initrevmove"), 1 == Le ? e = null : 2 == Le && (e = "#"), null != e) {
      "random" == e && (e = pn(3, we));
      var y = "#" == e ? ie : Ue(e, !1);
      y.length > 0 && He(N, y[0], 0, y[0].length, !0)
    }
    0 == Le && null != (e = Fe("demo")) && ("random" == e && (e = pn(3, we)), (ue = "#" == e ? ie : Ue(e, !0)).length > 0 && ue[0].length > 0 && (A = !0)), e = Fe("position"), yr(Dr(ne, te, re)), null == e && (e = s);
    var R = Math.PI / 12;
    for (u = 0; u < e.length; u++) {
      var S = R;
      switch (e[u].toLowerCase()) {
        case "d":
          S = -S;
        case "u":
          Er(te, S), Er(re, S);
          break;
        case "f":
          S = -S;
        case "b":
          xr(te, S), xr(re, S);
          break;
        case "l":
          S = -S;
        case "r":
          Fr(te, S), Fr(re, S)
      }
    }
    if (yr(Dr(ne, te, re)), v = 0, d = 0, null != (e = Fe("speed")))
      for (u = 0; u < e.length; u++) e.charAt(u) >= "0" && e.charAt(u) <= "9" && (v = 10 * v + parseInt(e[u]));
    if (null != (e = Fe("doublespeed")))
      for (u = 0; u < e.length; u++) e.charAt(u) >= "0" && e.charAt(u) <= "9" && (d = 10 * d + parseInt(e[u]));
    if (0 == v && (v = 10), 0 == d && (d = 3 * v / 2), T = 0, null == (e = Fe("perspective"))) T = 2;
    else
      for (u = 0; u < e.length; u++) e.charAt(u) >= "0" && e.charAt(u) <= "9" && (T = 10 * T + parseInt(e[u]));
    var B, I = 0;
    if (null != (e = Fe("scale")))
      for (u = 0; u < e.length; u++) e.charAt(u) >= "0" && e.charAt(u) <= "9" && (I = 10 * I + parseInt(e[u]));
    if (D = 1 / (1 + I / 10), E = !1, null != (e = Fe("hint"))) {
      E = !0, x = 0;
      for (u = 0; u < e.length; u++) e.charAt(u) >= "0" && e.charAt(u) <= "9" && (x = 10 * x + parseInt(e[u]));
      x < 1 ? E = !1 : x /= 10
    }(z = 13, null != (e = Fe("buttonheight"))) && ((B = parseInt(e)) >= 9 & B <= 25 && (z = B));
    (ve = 0 == ie.length ? 0 : 6, Y = 1, "0" == (e = Fe("buttonbar")) ? (Y = 0, z = 0, ve = 0) : "1" == e ? Y = 1 : "2" != e && 0 != ie.length || (Y = 2, ve = 0), e = Fe("edit"), p = "0" != e, e = Fe("repeat"), k = "0" != e, e = Fe("clickprogress"), L = "0" != e, e = Fe("movetext"), O = "1" == e ? 1 : "2" == e ? 2 : "3" == e ? 3 : "4" == e ? 4 : "5" == e ? 5 : 0, null != (e = Fe("textsize"))) && ((B = parseInt(e)) >= 5 & B <= 40 && (de = B));
    if (e = Fe("fonttype"), ge = null == e || "1" == e, X = 0, null != (e = Fe("metric")) && ("1" == e ? X = 1 : "2" == e ? X = 2 : "3" == e && (X = 3)), F = 1, null != (e = Fe("align")) && ("0" == e ? F = 0 : "1" == e ? F = 1 : "2" == e && (F = 2)), null != (e = Fe("ww")) && "1" == e && (me = !0), null != (e = Fe("snap")) && "1" == e && (be = !0), 2 != Le)
      for (u = 0; u < 6; u++)
        for (c = 0; c < 9; c++) G[u][c] = N[u][c], K[u][c] = H[u][c];
    for (u = 0; u < 3; u++) oe[u] = te[u], ae[u] = re[u], fe[u] = ne[u];
    Nr(t) < 128 ? (n = "white", r = function(e) {
      "#" != e.substring(0, 1) && (e = Zr(e));
      var t = parseInt(e.substring(1, 3), 16),
        r = parseInt(e.substring(3, 5), 16),
        n = parseInt(e.substring(5, 7), 16);
      return t = Math.floor(1.3 * t), r = Math.floor(1.3 * r), n = Math.floor(1.3 * n), Br(t > 255 ? 255 : t, r > 255 ? 255 : r, n > 255 ? 255 : n)
    }(t)) : (n = "black", r = Hr(t)), l = Nr(o) < 128 ? "white" : "black", a = n, null != (e = Fe("slidercolor")) && 6 == e.length && Ir(e) && (a = "#" + e), f = Hr(t), null != (e = Fe("sliderbgcolor")) && 6 == e.length && Ir(e) && (f = "#" + e), null != (e = Fe("troughcolor")) && 6 == e.length && Ir(e) && (f = "#" + e), i = "black", null != (e = Fe("cubecolor")) && 6 == e.length && Ir(e) && (i = "#" + e), W = -1, on = nn.getContext("2d"), un = z, cn = ve, sn = de, Mn(), hn.appendChild(nn), or(), A && je(-1)
  }

  function Fe(e) {
    var t = kn[e];
    return void 0 === t ? Q[e] : t
  }

  function Ee(e) {
    hr[0][0] = hr[0][1] = hr[1][1] = hr[3][0] = e, hr[1][0] = hr[2][0] = hr[2][1] = hr[3][1] = 1 - e
  }
  var xe = [0, 0, 0, 0, 0, 0, 1, 1, 1, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2],
    Be = [0, 1, 2, 3, 4, 5, 1, 2, 4, 5, 2, 0, 5, 2, 0, 0, 1, 2, 3, 4, 5];

  function Ue(e, t) {
    if (t) {
      for (var r = e.indexOf("{"); - 1 != r;) 0, r = e.indexOf("{", r + 1);
      if (null == ce) W = 0, ce = [];
      else {
        for (var n = [], o = 0; o < ce.length; o++) n[o] = ce[o];
        W = ce.length, ce = n
      }
    }
    var a = 1;
    for (r = e.indexOf(";"); - 1 != r;) a++, r = e.indexOf(";", r + 1);
    var f = [],
      l = 0;
    for (r = e.indexOf(";"), a = 0; - 1 != r;) f[a++] = Pe(e.substring(l, r), t), l = r + 1, r = e.indexOf(";", l);
    return f[a] = Pe(e.substring(l), t), f
  }
  var Ie = ["m", "t", "c", "s", "a"];

  function Pe(e, t) {
    var r = 0,
      n = [],
      o = "UDFBLRESMXYZxyzudfblr";
    1 == Me && (o = "UDFBLRESMXZYxzyudfblr");
    for (var a = 0; a < e.length; a++)
      if ("." == e.charAt(a)) n[r] = -1, r++;
      else if ("{" == e.charAt(a)) {
      a++;
      for (var f = ""; a < e.length && "}" != e.charAt(a);) t && (f += e.charAt(a)), a++;
      t && (ce[W] = f, n[r] = 1e3 + W, W++, r++)
    } else
      for (var l = 0; l < 21; l++)
        if (e.charAt(a) == o.charAt(l)) {
          a++;
          var i = xe[l];
          if (n[r] = 24 * Be[l], a < e.length && 0 == xe[l])
            for (var u = 0; u < Ie.length; u++)
              if (e.charAt(a) == Ie[u]) {
                i = u + 1, a++;
                break
              } n[r] += 4 * i, a < e.length && ("1" == e.charAt(a) ? a++ : "'" == e.charAt(a) || "3" == e.charAt(a) ? (n[r] += 2, a++) : "2" == e.charAt(a) && (++a < e.length && "'" == e.charAt(a) ? (n[r] += 3, a++) : n[r] += 1)), r++, a--;
          break
        } var c = [];
    for (a = 0; a < r; a++) c[a] = n[a];
    return c
  }

  function Ce(e, t, r) {
    if (t >= e.length) return "";
    for (var n = "", o = t; o < r; o++) n += Ye(e, o);
    return n
  }
  var Xe = [
      [
        ["U", "D", "F", "B", "L", "R"],
        ["Um", "Dm", "Fm", "Bm", "Lm", "Rm"],
        ["Ut", "Dt", "Ft", "Bt", "Lt", "Rt"],
        ["Uc", "Dc", "Fc", "Bc", "Lc", "Rc"],
        ["Us", "Ds", "Fs", "Bs", "Ls", "Rs"],
        ["Ua", "Da", "Fa", "Ba", "La", "Ra"]
      ],
      [
        ["U", "D", "F", "B", "L", "R"],
        ["~E", "E", "S", "~S", "M", "~M"],
        ["u", "d", "f", "b", "l", "r"],
        ["Z", "~Z", "Y", "~Y", "~X", "X"],
        ["Us", "Ds", "Fs", "Bs", "Ls", "Rs"],
        ["Ua", "Da", "Fa", "Ba", "La", "Ra"]
      ],
      [
        ["U", "D", "F", "B", "L", "R"],
        ["~E", "E", "S", "~S", "M", "~M"],
        ["u", "d", "f", "b", "l", "r"],
        ["Y", "~Y", "Z", "~Z", "~X", "X"],
        ["Us", "Ds", "Fs", "Bs", "Ls", "Rs"],
        ["Ua", "Da", "Fa", "Ba", "La", "Ra"]
      ],
      [
        ["U", "D", "F", "B", "L", "R"],
        ["u", "d", "f", "b", "l", "r"],
        ["Uu", "Dd", "Ff", "Bb", "Ll", "Rr"],
        ["QU", "QD", "QF", "QB", "QL", "QR"],
        ["UD'", "DU'", "FB'", "BF'", "LR'", "RL'"],
        ["UD", "DU", "FB", "BF", "LR", "RL"]
      ],
      [
        ["U", "D", "F", "B", "L", "R"],
        ["~E", "E", "S", "~S", "M", "~M"],
        ["u", "d", "f", "b", "l", "r"],
        ["y", "~y", "z", "~z", "~x", "x"],
        ["Us", "Ds", "Fs", "Bs", "Ls", "Rs"],
        ["Ua", "Da", "Fa", "Ba", "La", "Ra"]
      ]
    ],
    We = ["", "2", "'", "2'"];

  function Ye(e, t) {
    if (t >= e.length) return "";
    if (e[t] >= 1e3) return "";
    if (-1 == e[t]) return ".";
    var r = Xe[O - 1][Math.floor(e[t] / 4) % 6][Math.floor(e[t] / 24)];
    return "~" == r.charAt(0) ? r.substring(1) + We[(e[t] + 2) % 4] : r + We[e[t] % 4]
  }
  var ze = ["", "q", "h", "s"];

  function qe(e) {
    for (var t = 0, r = 0; r < e.length; r++) e[r] < 1e3 && t++;
    return t
  }

  function Oe(e, t) {
    for (var r = 0, n = 0;;) {
      for (; r < e.length && e[r] >= 1e3;) r++;
      if (n == t) break;
      r < e.length && (n++, r++)
    }
    return r
  }

  function Qe(e, t) {
    for (var r = 0, n = 0; n < e.length && (n < t || t < 0); n++) r += Ze(e[n]);
    return r
  }

  function Ze(e) {
    if (e < 0 || e >= 1e3) return 0;
    var t = e % 4,
      r = Math.floor(e / 4) % 6,
      n = 1;
    switch (X) {
      case 1:
        1 != t && 3 != t || (n *= 2);
      case 2:
        1 != r && 4 != r && 5 != r || (n *= 2);
      case 3:
        3 == r && (n = 0), 3 != X || 4 != r && 5 != r || (n *= 2)
    }
    return n
  }

  function Ne(e) {
    W = e.length > 0 && e[0] >= 1e3 ? e[0] - 1e3 : -1
  }

  function He(e, t, r, n, o) {
    for (var a = o ? r + n : r;;) {
      if (o) {
        if (a <= r) break;
        a--
      }
      if (t[a] >= 1e3) W = o ? -1 : t[a] - 1e3;
      else if (t[a] >= 0) {
        var f = t[a] % 4 + 1,
          l = Math.floor(t[a] / 4) % 6;
        4 == f && (f = 2), o && (f = 4 - f), it(e, Math.floor(t[a] / 24), f, l)
      }
      if (!o && ++a >= r + n) break
    }
  }
  var Ge = 0,
    Ke = 0;

  function je(e) {
    if (Je(), (A || 0 != ie.length && 0 != ie[B].length) && (!A || 0 != ue.length && 0 != ue[0].length)) {
      switch (I = 1, P = !1, C = !0, e) {
        case 0:
          break;
        case 1:
          I = -1;
          break;
        case 2:
          P = !0;
          break;
        case 3:
          I = -1, P = !0;
          break;
        case 4:
          C = !1
      }
      Gr(Ge++, I)
    }
  }

  function Je() {
    1 == R && (b = !0)
  }

  function Ve() {
    U = 0, ie.length > 0 && Ne(ie[B]), le = !0, M = !1;
    for (var e = 0; e < 6; e++)
      for (var t = 0; t < 9; t++) N[e][t] = G[e][t], H[e][t] = K[e][t];
    Le > 0 && (ie = Ue(pn(3, we), !1)), 2 == Le && He(N, ie[0], 0, ie[0].length, !0);
    for (e = 0; e < 3; e++) te[e] = oe[e], re[e] = ae[e], ne[e] = fe[e]
  }
  var $e = [
      [
        [0, 3],
        [0, 3]
      ],
      [
        [0, 3],
        [0, 3]
      ],
      [
        [0, 3],
        [0, 3]
      ],
      [
        [0, 3],
        [0, 3]
      ],
      [
        [0, 3],
        [0, 3]
      ],
      [
        [0, 3],
        [0, 3]
      ]
    ],
    _e = [],
    et = [],
    tt = [],
    rt = [
      [
        [0, 0],
        [0, 0]
      ],
      [
        [0, 3],
        [0, 3]
      ],
      [
        [0, 3],
        [0, 1]
      ],
      [
        [0, 1],
        [0, 3]
      ],
      [
        [0, 3],
        [2, 3]
      ],
      [
        [2, 3],
        [0, 3]
      ]
    ],
    nt = [
      [
        [0, 0],
        [0, 0]
      ],
      [
        [0, 3],
        [1, 2]
      ],
      [
        [1, 2],
        [0, 3]
      ]
    ],
    ot = [
      [1, 0, 3, 3, 2, 3],
      [0, 1, 5, 5, 4, 5],
      [2, 3, 1, 0, 3, 2],
      [4, 5, 0, 1, 5, 4],
      [3, 2, 2, 4, 1, 0],
      [5, 4, 4, 2, 0, 1]
    ],
    at = [
      [0, 0, 2, 2, 1, 2],
      [0, 0, 2, 2, 1, 2],
      [1, 2, 0, 0, 2, 1],
      [1, 2, 0, 0, 2, 1],
      [2, 1, 1, 1, 0, 0],
      [2, 1, 1, 1, 0, 0]
    ],
    ft = [
      [0, 1, 5, 5, 4, 5],
      [1, 0, 3, 3, 2, 3],
      [4, 5, 0, 1, 5, 4],
      [2, 3, 1, 0, 3, 2],
      [5, 4, 4, 2, 0, 1],
      [3, 2, 2, 4, 1, 0]
    ];

  function lt(e) {
    for (var t = 0; t < 6; t++) _e[t] = rt[ot[e][t]], tt[t] = rt[ft[e][t]], et[t] = nt[at[e][t]];
    le = !1
  }

  function it(e, t, r, n) {
    switch (n) {
      case 3:
        gt(e, 1 ^ t, r, !1);
      case 2:
        gt(e, t, 4 - r, !1);
      case 1:
        gt(e, t, 4 - r, !0);
        break;
      case 5:
        gt(e, 1 ^ t, 4 - r, !1), gt(e, t, 4 - r, !1);
        break;
      case 4:
        gt(e, 1 ^ t, r, !1);
      default:
        gt(e, t, 4 - r, !1)
    }
  }
  var ut = [0, 1, 2, 5, 8, 7, 6, 3],
    ct = [1, 3, -1, -3, 1, 3, -1, -3],
    st = [0, 2, 8, 6, 3, 1, 5, 7],
    ht = [
      [3, 3, 3, 0],
      [2, 1, 1, 1],
      [3, 3, 0, 0],
      [2, 1, 1, 2],
      [3, 2, 0, 0],
      [2, 2, 0, 1]
    ],
    vt = [
      [7, 7, 7, 4],
      [6, 5, 5, 5],
      [7, 7, 4, 4],
      [6, 5, 5, 6],
      [7, 6, 4, 4],
      [6, 6, 4, 5]
    ],
    dt = [];

  function gt(e, t, r, n) {
    mt(e, t, r, n), 1 == pe && r > 0 && r < 4 && (mt(H, t, r, n), function(e, t, r) {
      if (0 == r)
        for (var n = 0; n < 9; n++) H[e][n] = (H[e][n] + 4 - t) % 4;
      4 == e && (0 == r && (St(6, 1, 3), 1 == t ? St(0, 1, 1) : 2 == t ? St(0, 1, 2) : 3 == t && St(0, 3, 0)), 1 == r && (St(3, 1, 3), 1 == t ? St(3, 1, 1) : 2 == t ? St(3, 1, 2) : 3 == t && St(1, 3, 0)));
      5 == e && (0 == r && (St(0, 1, 3), 1 == t ? St(2, 3, 0) : 2 == t ? St(6, 1, 2) : 3 == t && St(6, 1, 1)), 1 == r && (St(3, 1, 3), 1 == t ? St(1, 3, 0) : 2 == t ? St(3, 1, 2) : 3 == t && St(3, 1, 1)));
      0 == r && (2 == e && At(0, 4 - t), 3 == e && At(1, t));
      1 == r && (2 == e && At(2, 4 - t), 3 == e && At(2, t))
    }(t, r, n))
  }

  function mt(e, t, r, n) {
    if (!n) {
      for (var o = 0; o < 8; o++) dt[(o + 2 * r) % 8] = e[t][ut[o]];
      for (o = 0; o < 8; o++) e[t][ut[o]] = dt[o]
    }
    var a = 3 * r;
    for (o = 0; o < 4; o++)
      for (var f = _[t][o], l = n ? vt[t][o] : ht[t][o], i = ct[l], u = st[l], c = 0; c < 3; c++, a++) dt[a % 12] = e[f][c * i + u];
    for (o = 0, a = 0; o < 4; o++)
      for (f = _[t][o], l = n ? vt[t][o] : ht[t][o], i = ct[l], u = st[l], c = 0; c < 3; c++, a++) e[f][c * i + u] = dt[a]
  }
  var bt, Mt, pt, kt, Lt, wt, yt, Rt = [
    [
      [0, 1, 0],
      [0, 3, 1],
      [0, 3, 4],
      [0, 1, 5]
    ],
    [
      [6, 1, 0],
      [2, 3, 1],
      [2, 3, 4],
      [6, 1, 5]
    ],
    [
      [3, 1, 0],
      [1, 3, 1],
      [1, 3, 4],
      [3, 1, 5]
    ]
  ];

  function St(e, t, r) {
    for (var n = e, o = 0; o < 3; n += t, o++) H[r][n] = (H[r][n] + 2) % 4
  }

  function At(e, t) {
    for (var r = 0; r < 4; r++)
      for (var n = Rt[e][r], o = n[0], a = 0; a < 3; o += n[1], a++) H[n[2]][o] = (H[n[2]][o] + t) % 4
  }
  var Tt, Dt, Ft = [],
    Et = [],
    xt = [],
    Bt = [],
    Ut = [
      [
        [0, 0],
        [3, 0],
        [3, 1],
        [0, 1]
      ],
      [
        [3, 0],
        [3, 3],
        [2, 3],
        [2, 0]
      ],
      [
        [3, 3],
        [0, 3],
        [0, 2],
        [3, 2]
      ],
      [
        [0, 3],
        [0, 0],
        [1, 0],
        [1, 3]
      ],
      [
        [0, 1],
        [3, 1],
        [3, 2],
        [0, 2]
      ],
      [
        [2, 0],
        [2, 3],
        [1, 3],
        [1, 0]
      ]
    ],
    It = [
      [1, 0],
      [0, 1],
      [-1, 0],
      [0, -1],
      [1, 0],
      [0, 1]
    ],
    Pt = [
      [1, 1, 1, 1, 1, -1],
      [1, 1, 1, 1, 1, -1],
      [1, -1, 1, -1, 1, 1],
      [1, -1, 1, -1, -1, 1],
      [-1, 1, -1, 1, -1, -1],
      [1, -1, 1, -1, 1, 1]
    ],
    Ct = [],
    Xt = [],
    Wt = [
      [
        [1, 0, 0],
        [0, 0, 0],
        [0, 0, 1]
      ],
      [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
      ],
      [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 1]
      ]
    ],
    Yt = [
      [
        [0, 0, 1],
        [0, 0, 0],
        [-1, 0, 0]
      ],
      [
        [0, 1, 0],
        [-1, 0, 0],
        [0, 0, 0]
      ],
      [
        [0, 0, 0],
        [0, 0, 1],
        [0, -1, 0]
      ]
    ],
    zt = [
      [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0]
      ],
      [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 1]
      ],
      [
        [1, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ]
    ],
    qt = [1, -1, 1, -1, 1, -1],
    Ot = [],
    Qt = [],
    Zt = [],
    Nt = [],
    Ht = [],
    Gt = [],
    Kt = [],
    jt = [],
    Jt = [],
    Vt = [],
    $t = [],
    _t = [],
    er = [
      [1, 0, 0],
      [0, 1, 0],
      [1, 1, 0],
      [1, 1, 1],
      [1, 0, 1],
      [1, 0, 2]
    ],
    tr = [],
    rr = [
      [0, 2, 2],
      [2, 1, 2],
      [2, 2, 2],
      [2, 2, 2],
      [2, 2, 2],
      [2, 2, 2]
    ],
    nr = [
      [0, 1, 2],
      [2, 1, 0],
      [0, 2, 1]
    ];

  function or() {
    if (on.save(), on.fillStyle = t, 1 != Y || 0 != ve && !A ? (Pr(on, 0, 0, bt, Mt), on.fillRect(0, 0, bt, Mt)) : (Pr(on, 0, 0, bt, Mt - an), on.fillRect(0, 0, bt, Mt - an)), yt = 0, le) gr(te, re, ne, $e, 3);
    else {
      for (var e = Math.cos(h + s), n = Math.sin(h + s) * qt[u], i = 0; i < 3; i++) {
        Ot[i] = 0, Qt[i] = 0;
        for (var v = 0; v < 3; v++) {
          var d = Math.floor(u / 2);
          Ot[i] += te[v] * (zt[d][i][v] + Wt[d][i][v] * e + Yt[d][i][v] * n), Qt[i] += re[v] * (zt[d][i][v] + Wt[d][i][v] * e + Yt[d][i][v] * n)
        }
      }
      Dr(Zt, Ot, Qt);
      var g = Math.cos(h - s),
        m = Math.sin(h - s) * qt[u];
      for (i = 0; i < 3; i++) {
        Nt[i] = 0, Ht[i] = 0;
        for (v = 0; v < 3; v++) {
          d = Math.floor(u / 2);
          Nt[i] += te[v] * (zt[d][i][v] + Wt[d][i][v] * g + Yt[d][i][v] * m), Ht[i] += re[v] * (zt[d][i][v] + Wt[d][i][v] * g + Yt[d][i][v] * m)
        }
      }
      Dr(Gt, Nt, Ht), Vt[0] = te, $t[0] = re, _t[0] = ne, Vt[1] = Ot, $t[1] = Qt, _t[1] = Zt, Vt[2] = Nt, $t[2] = Ht, _t[2] = Gt, tr[0] = _e, tr[1] = et, tr[2] = tt, Tr(Rr(wr(Kt, te), 5 + T), Rr(wr(Jt, j[u]), 1 / 3)), Tr(Rr(wr(jt, te), 5 + T), Rr(wr(Jt, j[1 ^ u]), 1 / 3));
      var b, M = Sr(Kt, j[u]),
        p = Sr(jt, j[1 ^ u]);
      b = M < 0 && p > 0 ? 0 : M > 0 && p < 0 ? 1 : 2, gr(Vt[er[c][nr[b][0]]], $t[er[c][nr[b][0]]], _t[er[c][nr[b][0]]], tr[nr[b][0]], rr[c][nr[b][0]]), gr(Vt[er[c][nr[b][1]]], $t[er[c][nr[b][1]]], _t[er[c][nr[b][1]]], tr[nr[b][1]], rr[c][nr[b][1]]), gr(Vt[er[c][nr[b][2]]], $t[er[c][nr[b][2]]], _t[er[c][nr[b][2]]], tr[nr[b][2]], rr[c][nr[b][2]])
    }
    if (q || R || (he = -1), !(Le > 0 && 2 == Y)) {
      if (!A && ie.length > 0) {
        if (ie[B].length > 0) {
          if (ve > 0) {
            on.lineWidth = ln, on.strokeStyle = l;
            var k = (bt - 2) * function(e, t) {
              for (var r = 0, n = 0; n < t; n++) e[n] < 1e3 && r++;
              return r
            }(ie[B], U) / qe(ie[B]);
            on.fillStyle = f, on.fillRect(fn, Mt - ve - fn, bt - an, ve), on.fillStyle = a, on.fillRect(fn, Mt - ve - fn, k, ve), on.beginPath(), on.rect(fn, Mt - ve - fn, bt - an, ve), on.stroke()
          }
          var L = Qe(ie[B], U) + "/" + Qe(ie[B], -1) + ze[X];
          on.font = "bold " + de + "px helvetica";
          var w = on.measureText(L).width,
            y = bt - w - 2,
            S = Mt - ve - Math.floor(3 * an);
          O > 0 ? (pr(on, L, ge ? y - an : y, S - de), function(e, t) {
            var n = 0 == U ? Oe(ie[B], U) : U,
              o = Ce(ie[B], 0, n),
              a = Ye(ie[B], n),
              f = Ce(ie[B], n + 1, ie[B].length),
              l = e.measureText(o).width,
              i = e.measureText(a).width,
              u = e.measureText(f).width,
              c = 1;
            c + l + i + u > bt && (c = Math.min(1, bt / 2 - l - i / 2), c = Math.max(c, bt - l - i - u - 2));
            i > 0 && (e.fillStyle = r, e.lineWidth = 2, e.strokeStyle = "black", e.beginPath(), sn <= 14 ? e.fillRect(c + l - 1, Mt - ve - de - Math.floor(4 * an), i + 2, de + Math.floor(3 * an)) : e.fillRect(c + l - 1, Mt - ve - de - Math.floor(2 * an), i + 2, de + Math.floor(an)));
            l > 0 && pr(e, o, c, t);
            i > 0 && pr(e, a, c + l, t);
            u > 0 && pr(e, f, c + l + i, t)
          }(on, S)) : pr(on, L, ge ? y - an : y, S)
        }
        if (ie.length > 1) {
          L = B + 1 + "/" + ie.length, w = on.measureText(L).width, y = bt - w - z - Math.floor(5 * an);
          pr(on, L, y, ar()), Yr(on, 7, bt - z / 2, z / 2)
        }
      }
      W >= 0 && (on.font = "bold " + de + "px helvetica", pr(on, ce[W], ge ? an : 0, ar()))
    }
    on.restore(), se && 0 != Y && function(e) {
      var t = z % 2 == 0 ? 1 : 0;
      if (t += Math.floor(an + .5) - 1, 2 == Y) return e.fillStyle = 0 == he || Le > 0 && 6 == he ? Hr(o) : o, e.fillRect(fn, Mt - z, z, z), e.lineWidth = ln, e.strokeStyle = l, e.beginPath(), e.rect(fn, Mt - z - fn, z, z), e.stroke(), void Yr(e, 0, z / 2, Mt - (z + 1) / 2 - t);
      if (1 == Y) {
        for (var r = 0, n = 0; n < 7; n++) {
          var a = Math.floor((bt - r) / (7 - n));
          e.fillStyle = he == n ? Hr(o) : o, e.fillRect(r, Mt, a, z), e.lineWidth = ln, e.strokeStyle = l, e.beginPath(), 0 == n ? e.rect(r + fn, Mt - fn, a - an, z) : e.rect(r - fn, Mt - fn, a, z), e.stroke(), e.strokeStyle = "black", Yr(e, n, r + a / 2, Mt + z / 2 - t), r += a
        }
        se = !1
      }
    }(on)
  }

  function ar() {
    return sn < 10 ? Math.floor(10 * an) : sn < 12 ? Math.floor(12 * an) : sn < 14 ? Math.floor(14 * an) : de
  }
  var fr = [],
    lr = [],
    ir = [],
    ur = [],
    cr = [
      [],
      [],
      [],
      [],
      [],
      []
    ],
    sr = [
      [],
      [],
      [],
      [],
      [],
      []
    ],
    hr = [
      [.1, .1],
      [.9, .1],
      [.9, .9],
      [.1, .9]
    ],
    vr = [
      [0, 0],
      [0, 1],
      [1, 1],
      [1, 0]
    ],
    dr = [];

  function gr(e, t, r, n, o) {
    for (var a = 0; a < 8; a++) {
      var f = (s = bt < Mt ? bt : Mt - ve) / 3.7 * Sr(J[a], t) * D,
        l = s / 3.7 * Sr(J[a], r) * D;
      f /= 1 - (h = s / (5 + T) * Sr(J[a], e) * D) / s, l /= 1 - h / s, ir[a] = bt / 2 + f, ur[a] = 0 == F ? (Mt - ve) / 2 * D - l : 2 == F ? Mt - ve - (Mt - ve) / 2 * D - l : (Mt - ve) / 2 - l
    }
    for (a = 0; a < 6; a++)
      for (var c = 0; c < 4; c++) cr[a][c] = ir[V[a][c]], sr[a][c] = ur[V[a][c]];
    if (E)
      for (a = 0; a < 6; a++)
        if (Tr(Rr(wr(Kt, e), 5 + T), j[a]), Sr(Kt, j[a]) < 0) {
          Rr(wr(dr, j[a]), x);
          var s, h;
          f = (s = bt < Mt ? bt : Mt - ve) / 3.7 * Sr(dr, t), l = s / 3.7 * Sr(dr, r);
          f /= 1 - (h = s / (5 + T) * Sr(dr, e)) / s, l /= 1 - h / s;
          var v = n[a][0][1] - n[a][0][0],
            d = n[a][1][1] - n[a][1][0];
          if (v > 0 && d > 0)
            for (var g = 0, m = n[a][1][0]; g < d; g++, m++)
              for (var b = 0, k = n[a][0][0]; b < v; b++, k++) {
                for (c = 0; c < 4; c++) mr(a, c, fr, lr, k + hr[c][0], m + hr[c][1], M), fr[c] = Math.floor(fr[c] + (M ? -f : f)), lr[c] = Math.floor(lr[c] - l);
                1 == pe ? (Or(on, fr, lr, "#fdfdfd"), Qr(on, fr, lr, a, H[a][3 * m + k], Z[N[a][3 * m + k]])) : Or(on, fr, lr, Z[N[a][3 * m + k]])
              }
        } for (a = 0; a < 6; a++) {
      v = n[a][0][1] - n[a][0][0], d = n[a][1][1] - n[a][1][0];
      if (v <= 0 || d <= 0) {
        for (c = 0; c < 4; c++) {
          var L = $[a][c];
          fr[c] = Math.floor(cr[a][c] + 2 * (cr[1 ^ a][L] - cr[a][c]) / 3), lr[c] = Math.floor(sr[a][c] + 2 * (sr[1 ^ a][L] - sr[a][c]) / 3), M && (fr[c] = bt - fr[c])
        }
        Or(on, fr, lr, i)
      } else {
        for (c = 0; c < 4; c++) mr(a, c, fr, lr, n[a][0][vr[c][0]], n[a][1][vr[c][1]], M);
        Or(on, fr, lr, i)
      }
    }
    for (a = 0; a < 6; a++)
      if (Tr(Rr(wr(Kt, e), 5 + T), j[a]), Sr(Kt, j[a]) > 0) {
        v = n[a][0][1] - n[a][0][0], d = n[a][1][1] - n[a][1][0];
        if (v > 0 && d > 0)
          for (g = 0, m = n[a][1][0]; g < d; g++, m++)
            for (b = 0, k = n[a][0][0]; b < v; b++, k++) {
              for (c = 0; c < 4; c++) mr(a, c, fr, lr, k + hr[c][0], m + hr[c][1], M);
              1 == pe ? (Or(on, fr, lr, "#fdfdfd"), Qr(on, fr, lr, a, H[a][3 * m + k], Z[N[a][3 * m + k]])) : Or(on, fr, lr, Z[N[a][3 * m + k]])
            }
        if (!p || R) continue;
        var w = (cr[a][1] - cr[a][0] + cr[a][2] - cr[a][3]) / 6,
          y = (cr[a][3] - cr[a][0] + cr[a][2] - cr[a][1]) / 6,
          S = (sr[a][1] - sr[a][0] + sr[a][2] - sr[a][3]) / 6,
          A = (sr[a][3] - sr[a][0] + sr[a][2] - sr[a][1]) / 6;
        if (3 == o)
          for (c = 0; c < 6; c++) {
            for (L = 0; L < 4; L++) mr(a, L, Ft[yt], Et[yt], Ut[c][L][0], Ut[c][L][1], !1);
            if (xt[yt] = (w * It[c][0] + S * It[c][1]) * Pt[a][c], Bt[yt] = (y * It[c][0] + A * It[c][1]) * Pt[a][c], Ct[yt] = _[a][c % 4], c >= 4 && (Ct[yt] &= -2), Xt[yt] = Math.floor(c / 4), 18 == ++yt) break
          } else if (0 == o) {
            if (a != u && v > 0 && d > 0) {
              for (c = 3 == v ? 0 == n[a][1][0] ? 0 : 2 : 0 == n[a][0][0] ? 3 : 1, L = 0; L < 4; L++) mr(a, L, Ft[yt], Et[yt], Ut[c][L][0], Ut[c][L][1], !1);
              xt[yt] = (w * It[c][0] + S * It[c][1]) * Pt[a][c], Bt[yt] = (y * It[c][0] + A * It[c][1]) * Pt[a][c], Ct[yt] = u, Xt[yt] = 0, yt++
            }
          } else if (1 == o && a != u && v > 0 && d > 0) {
          for (c = 3 == v ? 4 : 5, L = 0; L < 4; L++) mr(a, L, Ft[yt], Et[yt], Ut[c][L][0], Ut[c][L][1], !1);
          xt[yt] = (w * It[c][0] + S * It[c][1]) * Pt[a][c], Bt[yt] = (y * It[c][0] + A * It[c][1]) * Pt[a][c], Ct[yt] = u, Xt[yt] = 1, yt++
        }
      }
  }

  function mr(e, t, r, n, o, a, f) {
    o /= 3, a /= 3;
    var l = cr[e][0] + (cr[e][1] - cr[e][0]) * o,
      i = sr[e][0] + (sr[e][1] - sr[e][0]) * o,
      u = cr[e][3] + (cr[e][2] - cr[e][3]) * o,
      c = sr[e][3] + (sr[e][2] - sr[e][3]) * o;
    r[t] = Math.floor(.5 + l + (u - l) * a), n[t] = Math.floor(.5 + i + (c - i) * a), f && (r[t] = bt - r[t])
  }
  var br = [1, 1, -1, -1, -1, 1, 1, -1, -1, 0, 1, 0, 0, 1, 0, -1],
    Mr = [];

  function pr(e, t, r, o) {
    if (ge) {
      e.fillStyle = "black";
      for (var a = 0; a < Mr.length; a += 2) e.fillText(t, r + Mr[a], o + Mr[a + 1]);
      e.fillStyle = "white"
    } else e.fillStyle = n;
    e.fillText(t, r, o)
  }
  var kr = [-1, 3, 1, -1, 0, 2, 4, -1],
    Lr = [];

  function wr(e, t) {
    return e[0] = t[0], e[1] = t[1], e[2] = t[2], e
  }

  function yr(e) {
    var t = Math.sqrt(Sr(e, e));
    return e[0] /= t, e[1] /= t, e[2] /= t, e
  }

  function Rr(e, t) {
    return e[0] *= t, e[1] *= t, e[2] *= t, e
  }

  function Sr(e, t) {
    return e[0] * t[0] + e[1] * t[1] + e[2] * t[2]
  }

  function Ar(e, t) {
    return e[0] += t[0], e[1] += t[1], e[2] += t[2], e
  }

  function Tr(e, t) {
    return e[0] -= t[0], e[1] -= t[1], e[2] -= t[2], e
  }

  function Dr(e, t, r) {
    return e[0] = t[1] * r[2] - t[2] * r[1], e[1] = t[2] * r[0] - t[0] * r[2], e[2] = t[0] * r[1] - t[1] * r[0], e
  }

  function Fr(e, t) {
    var r = Math.sin(t),
      n = Math.cos(t),
      o = e[1] * n - e[2] * r,
      a = e[1] * r + e[2] * n;
    return e[1] = o, e[2] = a, e
  }

  function Er(e, t) {
    var r = Math.sin(t),
      n = Math.cos(t),
      o = e[0] * n - e[2] * r,
      a = e[0] * r + e[2] * n;
    return e[0] = o, e[2] = a, e
  }

  function xr(e, t) {
    var r = Math.sin(t),
      n = Math.cos(t),
      o = e[0] * n - e[1] * r,
      a = e[0] * r + e[1] * n;
    return e[0] = o, e[1] = a, e
  }

  function Br(e, t, r) {
    return "#" + Ur(e.toString(16)) + Ur(t.toString(16)) + Ur(r.toString(16))
  }

  function Ur(e) {
    return ("00" + e).substring(e.length)
  }

  function Ir(e) {
    for (var t = 0, r = 0; r < 6; r++)
      for (var n = 0; n < 16; n++)
        if (e[r].toLowerCase() == "0123456789abcdef".charAt(n)) {
          t++;
          break
        } return 6 == t
  }

  function Pr(e, t, r, n, o) {
    e.beginPath(), e.moveTo(t, r), e.lineTo(t + n, r), e.lineTo(t + n, r + o), e.lineTo(t, r + o), e.lineTo(t, r), e.closePath(), e.clip()
  }
  var Cr, Xr, Wr = [];

  function Yr(e, t, r, n) {
    switch (r = Math.floor(r), n = Math.floor(n), t) {
      case 0:
        qr(e, r - Wr[4], n - Wr[3], Wr[3], Wr[6] + 1), zr(e, r + Wr[4], n, -1);
        break;
      case 1:
        qr(e, r + Wr[1], n - Wr[3], Wr[3], Wr[6] + 1), zr(e, r - Wr[1], n, -1);
        break;
      case 2:
        zr(e, r + Wr[1], n, -1);
        break;
      case 3:
        R ? qr(e, r - Wr[4], n - Wr[3], Wr[7], Wr[7]) : (qr(e, r - Wr[4], n - Wr[2], Wr[7], Wr[5]), qr(e, r - Wr[2], n - Wr[4], Wr[3], Wr[9]));
        break;
      case 4:
        zr(e, r - Wr[2], n, 1);
        break;
      case 5:
        qr(e, r - Wr[4], n - Wr[3], Wr[3], Wr[6] + 1), zr(e, r, n, 1);
        break;
      case 6:
        qr(e, r + Wr[1], n - Wr[3], Wr[3], Wr[6] + 1), zr(e, r - Wr[4], n, 1);
        break;
      case 7:
        e.fillStyle = 7 == he ? Hr(o) : o, e.fillRect(bt - z - Wr[1] - fn, Wr[1] + fn, z, z), e.lineWidth = ln, e.strokeStyle = l, e.beginPath(), an % 2 == 0 ? e.rect(bt - z - Wr[1], Wr[1], z, z) : e.rect(bt - z - Wr[1] - fn, Wr[1] + fn, z, z), e.stroke(), zr(e, r - Wr[3], n + Wr[1], 1)
    }
  }

  function zr(e, t, r, n) {
    var o = 3 * an,
      a = [],
      f = [];
    a[0] = t, a[1] = t + n, a[2] = t + 4 * an * n, a[3] = t + n, a[4] = t, f[0] = r - o, f[1] = r - o, f[2] = r, f[3] = r + o, f[4] = r + o,
      function(e, t, r) {
        e.beginPath(), e.moveTo(t[0] + fn, r[0] + fn);
        for (var n = 1; n < 5; n++) e.lineTo(t[n] + fn, r[n] + fn);
        e.closePath(), e.fillStyle = "white", e.strokeStyle = "black", e.fill(), e.lineWidth = ln, e.stroke()
      }(e, a, f)
  }

  function qr(e, t, r, n, o) {
    e.lineWidth = ln, e.beginPath(), e.rect(t + fn, r + fn, n - 1, o - 1), e.fillStyle = "white", e.fill(), e.strokeStyle = "black", e.stroke()
  }

  function Or(e, t, r, n) {
    e.beginPath(), e.moveTo(t[0], r[0]), e.lineTo(t[1], r[1]), e.lineTo(t[2], r[2]), e.lineTo(t[3], r[3]), e.closePath(), e.fillStyle = n, e.strokeStyle = n, e.fill(), e.lineWidth = .7, e.stroke()
  }

  function Qr(e, t, r, n, o, a) {
    var f = [],
      l = [],
      i = [
        [0, 1, 2, 3],
        [3, 0, 1, 2],
        [2, 3, 0, 1],
        [1, 2, 3, 0]
      ];
    if (2 != ye || "#ffffff" != a) {
      for (var u = 0; u < 4; u++) f[u] = Math.floor(t[u] + .05 * (t[i[2][u]] - t[u])), l[u] = Math.floor(r[u] + .05 * (r[i[2][u]] - r[u]));
      0 == n && (o = (o + 1) % 4), 4 == n && (o = (o + 3) % 4);
      var c = i[o][0],
        s = i[o][1],
        h = i[o][2],
        v = i[o][3],
        d = .26 * (f[h] - f[s]),
        g = .26 * (l[h] - l[s]),
        m = (f[c] - f[s]) / 2,
        b = l[s] + (l[c] - l[s]) / 2,
        M = l[h] + (l[v] - l[h]) / 2,
        p = (f[v] - f[h]) / 2,
        k = 1 ^ o;
      e.fillStyle = a, e.beginPath(), e.moveTo(f[c] + (f[v] - f[c]) / 2, l[c] + (l[v] - l[c]) / 2), e.lineTo(f[k] + m, b), e.lineTo(f[k] + d + m, b + g), e.lineTo(f[k] + d, l[k] + g), k = (k + 1) % 4, e.lineTo(f[k] - d, l[k] - g), e.lineTo(f[k] - d + p, M - g), e.lineTo(f[k] + p, M), e.closePath(), e.fill(), e.lineWidth = .6 * an, e.strokeStyle = "black", e.stroke()
    }
  }

  function Zr(e) {
    return "white" == e ? "#FFFFFF" : "black" == e ? "#000000" : "#808080"
  }

  function Nr(e) {
    return "#" != e.substring(0, 1) && (e = Zr(e)), (299 * parseInt(e.substring(1, 3), 16) + 587 * parseInt(e.substring(3, 5), 16) + 114 * parseInt(e.substring(5, 7), 16)) / 1e3
  }

  function Hr(e) {
    "#" != e.substring(0, 1) && (e = Zr(e));
    var t = parseInt(e.substring(1, 3), 16),
      r = parseInt(e.substring(3, 5), 16),
      n = parseInt(e.substring(5, 7), 16);
    return Br(t = Math.floor(.7 * t), r = Math.floor(.7 * r), n = Math.floor(.7 * n))
  }

  function Gr(e, t) {
    if (e > Ke) setTimeout(Gr, 0, e, t);
    else {
      if (!C) {
        for (var r = ie[B]; U < r.length;) {
          if (r[U] >= 1e3) W = r[U] - 1e3;
          else if (-1 != r[U]) {
            var n = r[U] % 4 + 1,
              o = Math.floor(r[U] / 4) % 6,
              a = Math.floor(r[U] / 24);
            it(N, a, 4 == n ? 2 : n, o)
          }
          U++
        }
        return R = !1, se = !0, or(), void Ke++
      }
      var f, l, i, g, M, p, L = t;
      m = !1, requestAnimationFrame(function e() {
        if (T) {
          if (T = !1, p = !1, k) L > 0 ? U >= r.length && (U = 0, Ne(r)) : (W = -1, 0 == U && (U = r.length));
          else if (L > 0 && U >= r.length || L < 0 && 0 == U) return b = !1, R = !1, Ke++, se = !0, void or();
          R = !0, se = !0
        }
        if (D && (D = !1, L < 0 && (x = !1, 0 == U ? (x = !0, E = !0) : U--), !x)) {
          if (S = !1, -1 == r[U]) {
            if (or(), !P)
              for (f = Date.now(); Date.now() - f < 1e3;);
          } else r[U] >= 1e3 ? W = L > 0 ? r[U] - 1e3 : -1 : S = !0;
          if (S) {
            n = r[U] % 4 + 1, o = Math.floor(r[U] / 4) % 6;
            var t = n < 3;
            if (4 == n && (n = 2), L < 0 && (t = !t, n = 4 - n), a = Math.floor(r[U] / 24), w = !1, le = !0, y = !0, h = 0, ee[a] > 0 && (t = !t), C) {
              M = Math.PI / 2, g = t ? 1 : -1;
              var B = 67 * v;
              2 == n && (M = Math.PI, B = 67 * d), w = !0, u = a, c = o, lt(a), f = Date.now(), l = f, i = g * M / B, s = 0
            }
          } else F = !0
        }
        if (!x && (S && (C ? s * g < M ? (or(), (m || b) && (F = !0), l = Date.now(), s = i * (l - f)) : (F = !0, me && !P && (s -= g * M, or(), U > 0 && U < r.length - 1 && (F = !1, U += L, f = l, l = Date.now(), s = i * (l - f)))) : F = !0), F)) {
          if (F = !1, D = !0, S && (s = 0, w = !1, le = !0, it(N, a, n, o), y = !1, C && or(), P && (p = !0)), L > 0) {
            if (++U < r.length && r[U] >= 1e3 && (W = r[U] - 1e3, U++), U == r.length)
              if (A) {
                U = 0, Ne(r);
                for (var I = 0; I < 6; I++)
                  for (var X = 0; X < 9; X++) N[I][X] = G[I][X], H[I][X] = K[I][X]
              } else E = !0
          } else W = -1;
          (m || b || p) && (E = !0)
        }
        if (E) return E = !1, T = !0, Ge <= Ke + 1 && (R = !1), se = !0, 0 == he && Ve(), or(), A && (Ve(), A = !1), b = !1, void Ke++;
        requestAnimationFrame(e)
      });
      var S = !1,
        T = !0,
        D = !0,
        F = !1,
        E = !1,
        x = !1;
      r = A ? ue[0] : ie[B]
    }
  }
  document.addEventListener("touchstart", en), document.addEventListener("touchmove", vn), document.addEventListener("touchend", _r), document.addEventListener("mousedown", en), document.addEventListener("mousemove", vn), document.addEventListener("mouseup", _r), document.addEventListener("contextmenu", mn);
  var Kr = !1,
    jr = !0,
    Jr = document.getElementsByTagName("div"),
    Vr = Jr.length > 0 && "wrap" == Jr[0].className;

  function $r(e) {
    Vr ? Jr[0].style.overflow = e : document.body.style.overflow = e
  }

  function _r(e) {
    if (Kr && void 0 !== e.touches && (e.preventDefault(), $r("auto")), Kr ? setTimeout(function() {
        jr = !0
      }, 100) : jr = !0, Kr = !1, S = !1, q) q = !1, se = !0, or();
    else if (w && !y) {
      w = !1, h += s, s = 0;
      for (var t = h; t < 0;) t += 32 * Math.PI;
      var r = Math.floor(8 * t / Math.PI) % 16;
      (be || r % 4 == 0 || r % 4 == 3) && (r = Math.floor((r + 2) / 4), ee[u] > 0 && (r = (4 - r) % 4), h = 0, le = !0, it(N, u, r, c)), or()
    }
  }

  function en(e) {
    var t = nn.getBoundingClientRect(),
      r = Math.floor(t.left),
      n = Math.floor(t.top);
    if (void 0 === e.touches) var o = e.clientX,
      a = e.clientY;
    else o = e.touches[0].clientX, a = e.touches[0].clientY;
    o < r || o > r + bt / an || a < n || a > n + (Mt + z) / an || (e.preventDefault(), Kr = !0, jr = !1, void 0 !== e.touches && (e.preventDefault(), $r("hidden")), Cr = r, Xr = n, Lt = pt = dn(e), wt = kt = gn(e), g = !1, (he = function(e, t) {
      if (0 == Y) return -1;
      if (ie.length > 1 && e >= bt - z && e < bt && t >= 0 && t < z) return 7;
      if (2 == Y) return e >= 0 && e < z && t >= Mt - z && t < Mt ? 0 : -1;
      if (t < Mt) return -1;
      for (var r = 0, n = 0; n < 7; n++) {
        var o = (bt - r) / (7 - n);
        if (e >= r && e < r + o && t >= Mt && t < Mt + z) return n;
        r += o
      }
      return -1
    }(pt, kt)) >= 0 ? (q = !0, 3 == he ? R ? Je() : M = !M : 0 == he ? Le > 0 && 2 == Y ? 1 == ke ? (ke = !1, Je(), Ve()) : (ke = !0, je(kr[he = 6])) : (Je(), Ve()) : 7 == he ? (Je(), setTimeout(Ve, 10), B = B < ie.length - 1 ? B + 1 : 0) : je(kr[he]), se = !0, or()) : ve > 0 && ie.length > 0 && ie[B].length > 0 && kt > Mt - ve && kt <= Mt ? L && (Je(), tn(Ge++)) : (M && (Lt = pt = bt - pt), void 0 === e.touches ? !p || R || 0 != e.button || e.shiftKey || (g = !0) : p && !R && (g = !0)))
  }

  function tn(e) {
    if (e > Ke) setTimeout(tn, 0, e);
    else {
      var t = qe(ie[B]),
        r = Math.floor(((pt - 1) * t * 2 / (bt - 2) + 1) / 2);
      (r = Math.max(0, Math.min(t, r))) > 0 && (r = Oe(ie[B], r)), r > U && He(N, ie[B], U, r - U, !1), r < U && He(N, ie[B], r, U - r, !0), U = r, S = !0, or(), R = !1, Ke++
    }
  }
  var rn, nn, on, an, fn, ln, un, cn, sn, hn;
  Lr = [];

  function vn(e) {
    if (Kr && !q) {
      if (S) {
        Je();
        var t = qe(ie[B]),
          r = Math.floor(((dn(e) - 1) * t * 2 / (bt - 2) + 1) / 2);
        return (r = Math.max(0, Math.min(t, r))) > 0 && (r = Oe(ie[B], r)), r > U && He(N, ie[B], U, r - U, !1), r < U && He(N, ie[B], r, U - r, !0), U = r, void or()
      }
      var n = M ? bt - dn(e) : dn(e),
        o = gn(e),
        a = n - pt,
        f = o - kt;
      if (p && g && !w && !R) {
        Lt = n, wt = o;
        for (var l = 0; l < yt; l++) {
          var i = Ft[l][0],
            h = Ft[l][1] - i,
            v = Ft[l][3] - i,
            d = Et[l][0],
            m = Et[l][1] - d,
            b = Et[l][3] - d,
            k = (b * (pt - i) - v * (kt - d)) / (h * b - v * m),
            L = (-m * (pt - i) + h * (kt - d)) / (h * b - v * m);
          if (k > 0 && k < 1 && L > 0 && L < 1) {
            if (a * a + f * f < 144) return;
            if (Tt = xt[l], Dt = Bt[l], Math.abs(Tt * a + Dt * f) / Math.sqrt((Tt * Tt + Dt * Dt) * (a * a + f * f)) > .75) {
              w = !0, u = Ct[l], c = Xt[l];
              break
            }
          }
        }
        g = !1, pt = Lt, kt = wt
      }
      a = (n - pt) / an, f = (o - kt) / an, !w || R ? (yr(Ar(te, Rr(wr(Lr, re), -.016 * a))), yr(Dr(re, ne, te)), yr(Ar(te, Rr(wr(Lr, ne), .016 * f))), yr(Dr(ne, te, re)), pt = n, kt = o) : (le && lt(u), s = .03 * (Tt * a + Dt * f) / Math.sqrt(Tt * Tt + Dt * Dt)), or()
    }
  }

  function dn(e) {
    return void 0 === e.touches ? (e.clientX - Cr) * an : (e.touches[0].clientX - Cr) * an
  }

  function gn(e) {
    return void 0 === e.touches ? (e.clientY - Xr) * an : (e.touches[0].clientY - Xr) * an
  }

  function mn(e) {
    jr || e.preventDefault()
  }

  function bn() {
    clearTimeout(rn), rn = setTimeout(function() {
      Mn(), se = !0, or()
    }, 20)
  }

  function Mn() {
    Mt = hn.clientHeight - 1, bt = hn.clientWidth - 1, nn.style.width = bt + "px", nn.style.height = Mt + "px", an = devicePixelRatio, fn = an / 2, Mt = Math.floor(Mt * an), bt = Math.floor(bt * an), nn.width = bt, nn.height = Mt, ln = an, z = Math.floor(un * an), ve = Math.floor(cn * an), de = Math.floor(sn * an);
    for (var e = 1; e < 10; e++) Wr[e] = e * an;
    for (e = 0; e < br.length; e++) Mr[e] = br[e] * an;
    1 == Y && (Mt -= z)
  }

  function pn(e, t) {
    var r, n, o = ["R", "L", "F", "B", "U", "D"],
      a = ["", "m", "n"],
      f = ["", "2", "'"],
      l = -1,
      i = -1,
      u = -1,
      c = "";
    0 == t && (t = 10 * e);
    for (var s = 0; s < t; s++) {
      for (; l == i || Math.floor(l / 2) == Math.floor(i / 2) && l == u;) l = Math.floor(6 * Math.random());
      u = i, i = l, r = Math.floor(3 * Math.random()), e <= 3 ? c += "" + o[l] + f[r] + " " : (n = Math.floor(Math.random() * (e > 4 ? 3 : 2)), 5 == e && 1 == n && (n = 0), c += "" + o[l] + a[n] + f[r] + " ")
    }
    return c
  }
  window.addEventListener("resize", bn);
  var kn = [];

  function Ln() {
    document.removeEventListener("mousedown", en), document.removeEventListener("touchstart", en), document.removeEventListener("touchmove", vn), document.removeEventListener("touchend", _r), document.removeEventListener("mousedown", en), document.removeEventListener("mousemove", vn), document.removeEventListener("mouseup", _r), document.removeEventListener("contextmenu", mn), window.removeEventListener("resize", bn)
  }! function() {
    nn = document.createElement("canvas"), void 0 !== e && function() {
      for (var t = e.split("&"), r = 0; r < t.length; r++) {
        var n = t[r].split("=");
        void 0 !== n[1] && (kn[n[0]] = decodeURIComponent(n[1].trim()))
      }
    }();
    var t = Fe("id");
    if (null != t)(hn = document.getElementById(t)).innerHTML = "";
    else if (null != document.currentScript) hn = document.currentScript.parentNode;
    else {
      var r = document.getElementsByTagName("script"),
        n = r[r.length - 1];
      hn = n.parentNode
    }
    null != hn.id && "undefined" != typeof removeListeners && (removeListeners[hn.id] = Ln);
    for (var o = 0; o < 6; o++) N[o] = [], H[o] = [], G[o] = [], K[o] = [];
    for (o = 0; o < 18; o++) Ft[o] = [], Et[o] = [];
    B = 0, h = 0, Te()
  }()
}
