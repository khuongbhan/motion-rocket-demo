import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(MotionPathPlugin, MotionPathHelper);

export let endingTL = gsap.timeline();

gsap.set(".moon-things", {transformOrigin: "center"})
gsap.set("#right-arm", {transformOrigin: "bottom left"})

// zooming out

endingTL.to("#space-ship",{alpha:0, scale: 0, duration:.5},"zoomOut")
.to("#moon",{duration: 2, scale: 4, y:"-=600", x:"-=150", ease:"power3.out"},"zoomOut")
.to(".moon-things",{display: "block", duration: .4, opacity: 1},"zoomOut2")

// blinking

.to("#left-eye", {scaleY:.15, duration:.3},"zoomOut3")
.to("#left-eye", {scaleY:1, duration:.5},"zoomOut3")
.to("#right-eye", {scaleY:.15, duration:.3},"zoomOut3")
.to("#right-eye", {scaleY:1, duration:.5},"zoomOut3")
.to("#left-eye", {scaleY:.15, duration:.3},"zoomOut4")
.to("#left-eye", {scaleY:1, duration:.5},"zoomOut4")
.to("#right-eye", {scaleY:.15, duration:.3},"zoomOut4")
.to("#right-eye", {scaleY:1, duration:.5},"zoomOut4")

// waving byebye

.fromTo("#right-arm", {duration: .5, rotation: 12, ease:"power3.out"},{duration: .5, rotation: 0, ease:"power3.out"},"zoomOut5")
.to("#right-arm", {duration: .5, rotation: 12, ease:"power3.out"},"zoomOut6")
.to("#right-arm", {duration: .4, rotation: 0, ease:"power3.out"},"zoomOut7")
.to("#right-arm", {duration: .6, rotation: 0, ease:"power3.out"},"zoomOut8")

// flying off

.to("#moon", {rotate:420, duration:1.5, ease: "power3.out"}, "zoomOut9")
.to("#moon", {x:"+=1000", y:"+=200", duration:1.25, ease: "power3.in", scale: 1})
