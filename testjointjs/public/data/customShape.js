create_custom_stakeHolder_shape = function(data) {
    var text_key = [], text_val = [], i = 0, attrs = [];
    $.each(data, function(key, val){
        text_key.push(key);
        text_val.push(val);
    })
    attrs = {
        rect: {
            stroke: '#ccc',
            'fill-opacity': 1,
            fill:'white',
            width: 250,
            height: 50
        },
        ".recttitle": {
            width:150,
            height: 100,
            x: 0,
            y: 0
        },
        ".rectimage": {
                width: 100,
                height: 100,
                transform: "translate(150, 0)"
        },
        ".rect0": {
            transform: "translate(0, 100)"
        },
         ".rect1": {
            transform: "translate(0, 150)"
        },
         ".rect2": {
            transform: "translate(0, 200)"
        },
         ".rect3": {
            transform: "translate(0, 250)"
        },
         ".rect4": {
            transform: "translate(0, 300)"
        },
         ".rect5": {
            transform: "translate(0, 350)"
        },
        ".text0": {
            x:10,
            y:130,
            text:'key : val',
        },
        ".text1": {
            x:10,
            y:180,
            text:'key : value',
        },
        ".text2": {
            x:10,
            y:230,
            text:'key : value',
        },
        ".text3": {
            x:10,
            y:280,
            text:'key : value',
        },
        ".text4": {
            x:10,
            y:330,
            text:'key : value',
        },
        ".text5": {
            x:10,
            y:380,
            text:'key : value',
        }
    }
    nbrofblock = Object.keys(data).length;
    markup = '<g class="rotatable"><g class="scalable"><rect class="recttitle" /><rect class="rectimage"/>'
    var size = (nbrofblock + 1) * 50
    nbrofblock--;
    i = 0;
    var rect_position = {};
    rect_position.y = 100;
    rect_position.x = 0;
    var text_position = {};
    text_position.y = 130;
    text_position.x = 10;
    while (nbrofblock >= 0) {
        // rect = '.rect' + i.toString();
        // text = '.text' + i.toString();
        // markup += '<rect class="' + rect + '" /><text class="' + text + '" />'
        markup += '<rect class="rect' + i.toString() + '" /><text class="text' + i.toString() + '3" />'
        // attrs["\"" + rect + "\""] = {
            // transform: "translate(" + rect_position.x + "," + rect_position.y + ")"
        // }
        // attrs["\"" + text + "\""] = {
            // x:text_position.x, y: text_position.y
        // }
        // rect_position.y += 50;
        // text_position.y += 50;
        nbrofblock--;
        i++;
    }
    console.log(attrs);
    markup += '</g></g>'
    joint.shapes.basic.stakeHolder = joint.dia.Element.extend({
        markup: markup,
        defaults: joint.util.deepSupplement({
            type: "basic",
            size: {
                width: 250,
                height: size
            },
            attrs: attrs
        }, joint.dia.Element.prototype.defaults)
    });
}
