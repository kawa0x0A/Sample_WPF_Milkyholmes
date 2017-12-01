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
                case CharacterName.Sherlock_Shellinford: brushColor = Colors.Pink;   break;
                case CharacterName.Yuzurizaki_Nero:      brushColor = Colors.Yellow; break;
                case CharacterName.Hercule_Burton:       brushColor = Colors.Green;  break;
                case CharacterName.Cordelia_Glauca:      brushColor = Colors.Blue;   break;

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
            }

            return new SolidColorBrush(brushColor);
        }

        public object ConvertBack (object value, Type targetType, object parameter, CultureInfo culture)
        {
            throw new NotImplementedException();
        }
    }
}
