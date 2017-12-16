using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Data;
using System.Windows.Media;

namespace CharacterColorViewer
{
    public class CharacterColorConverter : IValueConverter
    {
        public object Convert (object value, Type targetType, object parameter, CultureInfo culture)
        {
            var brushColor = Colors.White;
            var characterName = (CharacterName)value;

            switch (characterName)
            {
                case CharacterName.Sherlock_Shellinford: brushColor = Colors.DeepPink; break;
                case CharacterName.Yuzurizaki_Nero:      brushColor = Colors.Yellow;   break;
                case CharacterName.Hercule_Burton:       brushColor = Colors.Green;    break;
                case CharacterName.Cordelia_Glauca:      brushColor = Colors.SkyBlue;  break;

                case CharacterName.Akechi_Kokoro:        brushColor = Colors.LightYellow; break;
                case CharacterName.Hasegawa_Hirano:      brushColor = Colors.DarkGray;    break;
                case CharacterName.Zenigata_Tsugiko:     brushColor = Colors.LawnGreen;   break;
                case CharacterName.Toyama_Saku:          brushColor = Colors.LightPink;   break;

                case CharacterName.Arsene:      brushColor = Colors.Purple; break;
                case CharacterName.Twenty:      brushColor = Colors.Black;  break;
                case CharacterName.Stone_River: brushColor = Colors.Black;  break;
                case CharacterName.rat:         brushColor = Colors.Black;  break;

                case CharacterName.Tokiwa_Kazumi: brushColor = Colors.DarkSlateBlue; break;
                case CharacterName.Myojingawa_Alice: brushColor = Colors.WhiteSmoke; break;

                case CharacterName.Kobayashi_Opera: brushColor = Colors.SaddleBrown; break;
                case CharacterName.Ellery_Himeyuri: brushColor = Colors.RoyalBlue;   break;

                case CharacterName.Amagi_Marine: brushColor = Colors.Orange; break;
                case CharacterName.Hojo_Miki:    brushColor = Colors.Violet; break;

                case CharacterName.Otoha_Leonard: brushColor = Colors.LightPink;    break;
                case CharacterName.Parte_Leonard: brushColor = Colors.Cyan;         break;
                case CharacterName.Tact_Leonard:  brushColor = Colors.Orange;       break;
            }

            return new SolidColorBrush(brushColor);
        }

        public object ConvertBack (object value, Type targetType, object parameter, CultureInfo culture)
        {
            throw new NotImplementedException();
        }
    }

    public class CharacterNameConverter : IValueConverter
    {
        public object Convert (object value, Type targetType, object parameter, CultureInfo culture)
        {
            var characterName = (CharacterName)value;
            var text = string.Empty;

            switch (characterName)
            {
                case CharacterName.Sherlock_Shellinford: text = "シャーロック・シェリンフォード"; break;
                case CharacterName.Yuzurizaki_Nero:      text = "譲崎 ネロ";                      break;
                case CharacterName.Hercule_Burton:       text = "エルキュール・バートン";         break;
                case CharacterName.Cordelia_Glauca:      text = "コーデリア・グラウカ";           break;

                case CharacterName.Akechi_Kokoro:    text = "明智 小衣";   break;
                case CharacterName.Hasegawa_Hirano:  text = "長谷川 平乃"; break;
                case CharacterName.Toyama_Saku:      text = "遠山 咲";     break;
                case CharacterName.Zenigata_Tsugiko: text = "銭形 次子";   break;

                case CharacterName.Arsene: text = "アルセーヌ";          break;
                case CharacterName.Twenty: text = "トゥエンティ";        break;
                case CharacterName.Stone_River: text = "ストーンリバー"; break;
                case CharacterName.rat: text = "ラット";                 break;

                case CharacterName.Tokiwa_Kazumi: text = "常盤 カズミ";      break;
                case CharacterName.Myojingawa_Alice: text = "明神川 アリス"; break;

                case CharacterName.Kobayashi_Opera: text = "小林 オペラ";     break;
                case CharacterName.Ellery_Himeyuri: text = "エラリー 姫百合"; break;

                case CharacterName.Amagi_Marine: text = "天城 茉莉音"; break;
                case CharacterName.Hojo_Miki:    text = "法条 美樹";   break;

                case CharacterName.Otoha_Leonard: text = "オトハ・レナード"; break;
                case CharacterName.Parte_Leonard: text = "パルテ・レナード"; break;
                case CharacterName.Tact_Leonard:  text = "タクト・レナード"; break;
            }

            return text;
        }

        public object ConvertBack (object value, Type targetType, object parameter, CultureInfo culture)
        {
            throw new NotImplementedException();
        }
    }
}
