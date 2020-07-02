const URL = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ig
const IMAGE = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|svg|ico|tiff|tif|jpeg|cur|apng|webp|bmp)/g
const NUMBER = /^-?[0-9]+$/
const BOOLEAN = /^(true|false|1|0)$/
const EMAIL = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
const TEXT = ''
const AFTER_DOT = /[^.]+$/
const BEFORE_DOT = /^([^.]+)/
const COLOR = /(?:#|0x)(?:[a-f0-9]{3}|[a-f0-9]{6})\b|(?:rgb|hsl)a?\([^\)]*\)|(lime|aqua|teal|navy|blue|olive|yellow|fuchsia|purple|red|maroon|green|gray|white|black|silver)/
export  {
    TEXT,
    URL,
    EMAIL,
    IMAGE,
    NUMBER,
    BEFORE_DOT,
    AFTER_DOT,
    BOOLEAN,
    COLOR
}