## css命名 ##
css命名，业界的标准有BEM，观察了下vuetify的css,用的就是BEM.

其中B(block)的命名，以`-`来衔接，比如`v-slide-group`.

E(element，组成元素)，组成这个B(block)的里面有很多个部件，比如header部分，content部分，pre部门,next部分。那么他的命名就 变成了`v-slide-group__header`,`v-slide-group__content`,`v-slide-group__pre`,`v-slide-group__next`,element用`__`.

M（modifier，修饰符）显然在交互过程中，不是每个状态都有next或者pre能够操作的，当next无法操作的时候，给next一个样式，这个时候修饰符就出来了，修饰符用`--`.