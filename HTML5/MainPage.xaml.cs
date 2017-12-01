using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Common;

namespace HTML5
{
    public partial class MainPage : Page
    {
        public MainPage ()
        {
            this.InitializeComponent();

            // Enter construction logic here...
            CharacterComboBox.ItemsSource = Enum.GetValues(typeof(CharacterName));
            CharacterComboBox.SelectedIndex = 0;
        }
    }
}
