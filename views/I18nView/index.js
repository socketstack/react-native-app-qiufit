/**
 * Created by guguyanhua on 16/1/19.
 */
import React ,{

} from 'react-native';
var I18n = require('react-native-i18n');
class I18nView {
  //是不是大陆市场
  isZh(){
    return I18n.locale === 'zh-cn';
    //return false;
  }
  //所有非大陆市场
  notZh(){
    return I18n.locale !== 'zh-cn';
    //return true;
  }

  getI18nFontRadio() {
    return I18n.locale.startsWith('zh') ? 1 : 0.5;
  }
}

module.exports = new I18nView();