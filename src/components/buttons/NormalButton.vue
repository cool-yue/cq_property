<template>
    <button :class="buttonClassType" @click="handleClick"><slot>default</slot></button>
</template>
<script>
const classPrefix = "normal_button_";
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

button {
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
}

button.isRound {
    padding: 12px 23px;
    border-radius: 20px;
}

button:active {
    outline: 0;
    box-shadow: inset 0 3px 5px rgba(0,0,0,.125);
}


.normal_button_default {
    background-color: #fff;
    color: #333;
    border-color: #ccc;
}
.normal_button_default:hover {
    background-color: #e6e6e6;
    color: #333;
    border-color: #adadad;
}
.normal_button_default:active {
    background-color: #e6e6e6;
    color: #333;
    border-color: #adadad;
}
.normal_button_default:focus {
    background-color: #ccc;
    color: #333;
    border-color: #8c8c8c;
}
.normal_button_default:active:focus, .normal_button_default:active:focus {
    background-color: #d4d4d4;
    color: #333;
    border-color: #8c8c8c;
}


.normal_button_primary {
    background-color: #337ab7;
    color: #fff;
    border-color: #2e6da4;
}
.normal_button_primary:hover {
    background-color: #286090;
    color: #fff;
    border-color: #204d74;
}
.normal_button_primary:focus {
    background-color: #286090;
    color: #fff;
    border-color: #122b40;
}
.normal_button_primary:active {
    background-color: #286090;
    color: #fff;
    border-color: #204d74;
}
.normal_button_primary:active:hover {
    background-color: #204d74;
    color: #fff;
    border-color: #122b40;
}


.normal_button_danger {
    background-color: #d9534f;
    color: #fff;
    border-color: #d43f3a;
}
.normal_button_danger:hover {
    background-color: #c9302c;
    color: #fff;
    border-color: #ac2925;
}
.normal_button_danger:focus {
    background-color: #c9302c;
    color: #fff;
    border-color: #761c19;
}
.normal_button_danger:active {
    background-color: #c9302c;
    color: #fff;
    border-color: #ac2925;
}
.normal_button_danger:active:focus,.normal_button_danger:active:hover {
    background-color: #ac2925;
    color: #fff;
    border-color: #761c19;
}


.normal_button_success {
    background-color: #5cb85c;
    color: #fff;
    border-color: #4cae4c;
}
.normal_button_success:hover {
    background-color: #449d44;
    color: #fff;
    border-color: #398439;
}
.normal_button_success:focus {
    background-color: #449d44;
    color: #fff;
    border-color: #255625;
}
.normal_button_success:active {
    background-color: #449d44;
    color: #fff;
    border-color: #398439;
}
.normal_button_success:active:hover,.normal_button_success:active:focus {
    background-color: #398439;
    color: #fff;
    border-color: #255625;
}



.normal_button_warning {
    background-color: #f0ad4e;
    color: #fff;
    border-color: #eea236;
}
.normal_button_warning:hover {
    background-color: #ec971f;
    color: #fff;
    border-color: #d58512;
}
.normal_button_warning:focus {
    background-color: #ec971f;
    color: #fff;
    border-color: #d58512;
}
.normal_button_warning:active {
    background-color: #ec971f;
    color: #fff;
    border-color: #d58512;
}

.normal_button_warning:active:focus,.normal_button_warning:active:hover {
    background-color: #d58512;
    color: #fff;
    border-color: #985f0d;
}
</style>