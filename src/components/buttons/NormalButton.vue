<template>
    <button :class="[buttonClassType, 'normal-button']" @click="handleClick"><slot>default</slot></button>
</template>
<script>
const classPrefix = "normal-button--";
export default {
    props: {
        type: {
            type: String,
            default: "default"
        }
    },
    computed: {
        buttonClassType() {
            return classPrefix + this.type;
        }
    },
    methods: {
        handleClick(...args) {
            this.$emit("normal-button-click", ...args);
        }
    }
};
</script>
<style>

.normal-button {
    display: inline-block;
    padding: 12px 20px;
    font-size: 14px;
    line-height: 14px;
    white-space: nowrap;
    font-weight: 400;
    white-space: nowrap;
    vertical-align: middle;
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;
    box-sizing: border-box;
    padding: 12px 23px;
    border-radius: 20px;
    outline: 0;
}

button.isRound {
    padding: 12px 23px;
    border-radius: 20px;
}

.normal-button--active {
    outline: 0;
    /* box-shadow: inset 0 3px 5px rgba(0,0,0,.125); */
}


.normal-button--default {
    background-color: #fff;
    color: #333;
    border-color: #ccc;
}
.normal-button--default:hover {
    background-color: #e6e6e6;
    color: #333;
    border-color: #adadad;
}
.normal-button--default:active {
    background-color: #e6e6e6;
    color: #333;
    border-color: #adadad;
}
.normal-button--default:focus {
    background-color: #ccc;
    color: #333;
    border-color: #8c8c8c;
}
.normal-button--default:active:focus, .normal-button--default:active:focus {
    background-color: #d4d4d4;
    color: #333;
    border-color: #8c8c8c;
}


.normal-button--primary {
    background-color: #337ab7;
    color: #fff;
    border-color: #2e6da4;
}
.normal-button--primary:hover {
    background-color: #286090;
    color: #fff;
    border-color: #204d74;
}
.normal-button--primary:focus {
    background-color: #286090;
    color: #fff;
    border-color: #122b40;
}
.normal-button--primary:active {
    background-color: #286090;
    color: #fff;
    border-color: #204d74;
}
.normal-button--primary:active:hover {
    background-color: #204d74;
    color: #fff;
    border-color: #122b40;
}


.normal-button--danger {
    background-color: #d9534f;
    color: #fff;
    border-color: #d43f3a;
}
.normal-button--danger:hover {
    background-color: #c9302c;
    color: #fff;
    border-color: #ac2925;
}
.normal-button--danger:focus {
    background-color: #c9302c;
    color: #fff;
    border-color: #761c19;
}
.normal-button--danger:active {
    background-color: #c9302c;
    color: #fff;
    border-color: #ac2925;
}
.normal-button--danger:active:focus,.normal-button--danger:active:hover {
    background-color: #ac2925;
    color: #fff;
    border-color: #761c19;
}


.normal-button--success {
    background-color: #5cb85c;
    color: #fff;
    border-color: #4cae4c;
}
.normal-button--success:hover {
    background-color: #449d44;
    color: #fff;
    border-color: #398439;
}
.normal-button--success:focus {
    background-color: #449d44;
    color: #fff;
    border-color: #255625;
}
.normal-button--success:active {
    background-color: #449d44;
    color: #fff;
    border-color: #398439;
}
.normal-button--success:active:hover,.normal-button--success:active:focus {
    background-color: #398439;
    color: #fff;
    border-color: #255625;
}



.normal-button--warning {
    background-color: #f0ad4e;
    color: #fff;
    border-color: #eea236;
}
.normal-button--warning:hover {
    background-color: #ec971f;
    color: #fff;
    border-color: #d58512;
}
.normal-button--warning:focus {
    background-color: #ec971f;
    color: #fff;
    border-color: #d58512;
}
.normal-button--warning:active {
    background-color: #ec971f;
    color: #fff;
    border-color: #d58512;
}

.normal-button--warning:active:focus,.normal-button--warning:active:hover {
    background-color: #d58512;
    color: #fff;
    border-color: #985f0d;
}
</style>