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
                case CharacterName.Yuzurizaki_Nero:                     brushColor = Colors.Yellow; break;
                case CharacterName.Hercule_Burton:         brushColor = Colors.Green;  break;
                case CharacterName.Cordelia_Glauca:           brushColor = Colors.Blue;   break;
            }

            return new SolidColorBrush(brushColor);
        }

        public object ConvertBack (object value, Type targetType, object parameter, CultureInfo culture)
        {
            throw new NotImplementedException();
        }
    }
}
