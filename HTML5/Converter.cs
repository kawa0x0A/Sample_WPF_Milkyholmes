using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Windows.UI;
using Windows.UI.Xaml.Data;
using Windows.UI.Xaml.Media;

namespace HTML5
{
    public class CharacterColorConverter : IValueConverter
    {
        public object Convert (object value, Type targetType, object parameter, string language)
        {
            if (value == null) return null;

            var brushColor = Colors.White;
            var characterName = (CharacterName)value;

            switch (characterName)
            {
                case CharacterName.SherlockShellinford: brushColor = Colors.Pink;   break;
                case CharacterName.YuzurizakiNero:                     brushColor = Colors.Yellow; break;
                case CharacterName.HerculeBurton:         brushColor = Colors.Green;  break;
                case CharacterName.CordeliaGlauca:           brushColor = Colors.Blue;   break;
            }

            return new SolidColorBrush(brushColor);
        }

        public object ConvertBack (object value, Type targetType, object parameter, string language)
        {
            throw new NotImplementedException();
        }
    }
}
