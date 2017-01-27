const types = require('./types');

const defaultOpts = {
  type: 'light',
  centered: false,
  consoleCentered: false
};
function boxd(lines, {type = 'light',
                      centered = false,
                      consoleCentered = false} = defaultOpts){
  if(typeof lines === 'string') lines = lines.split('\n');
  if(!Array.isArray(lines)) return;

  var result = '';
  var longest = 0;
  var consoleWidth = process.stdout.columns;

  // Box type, if an invalid type is entered it will default to light
  var b = types[type] || types.light;

  // Check if any lines are longer than the console width,
  //  and if they are, continue them on the next line
  for(let i = 0; i < lines.length; i++){
    if(lines[i].length > consoleWidth){
      let cutLine = lines[i]
      lines[i] = lines[i].slice(0, consoleWidth - (lines[i].length + 2));
      if(typeof lines[i + 1] !== 'undefined') lines[i + 2] = lines[i + 1];
      lines[i + 1] = cutLine.substr(consoleWidth - (cutLine.length + 2));
    }
    if(lines[i].length > longest) longest = lines[i].length;
  }

  var consoleCenterStart = (consoleWidth / 2) - (longest/2)

  // Add top
  if(consoleCentered) result += ' '.repeat(consoleCenterStart);
  result += b.tl;
  result += b.h.repeat(longest);
  result += b.tr
  if(longest !== consoleWidth - 2) result += '\n';

  // Add middle
  for(let line of lines){
    let centerStart = (longest - line.length) / 2;

    if(consoleCentered) result += ' '.repeat(consoleCenterStart);
    result += b.v;
    if(centered){
      result += ' '.repeat(Math.floor(centerStart));
      result += line;
      result += ' '.repeat(Math.ceil(centerStart));
    }
    else{
      result += line;
      result += ' '.repeat(longest - line.length);
    }
    result += b.v
    if(longest !== consoleWidth - 2) result += '\n';
  }

  // Add bottom
  if(consoleCentered) result += ' '.repeat(consoleCenterStart);
  result += b.bl;
  result += b.h.repeat(longest);
  result += b.br
  if(longest !== consoleWidth - 2) result += '\n';

  return result;
}

module.exports = boxd;
