/* Generated by JSIL v0.8.2 build 30177. See http://jsil.org/ for more information. */ 
'use strict';
var $asm_HTML5 = JSIL.DeclareAssembly("HTML5, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");

JSIL.DeclareNamespace("HTML5");
/* class HTML5.App */ 

(function App$Members () {
  var $, $thisType;
  var $T00 = function () {
    return ($T00 = JSIL.Memoize($asm_CSharpXamlForHtml5.Windows.UI.Xaml.Application)) ();
  };
  var $T01 = function () {
    return ($T01 = JSIL.Memoize($asm_HTML5.HTML5.MainPage)) ();
  };
  var $T02 = function () {
    return ($T02 = JSIL.Memoize($asm_CSharpXamlForHtml5.Windows.UI.Xaml.Window)) ();
  };
  var $T03 = function () {
    return ($T03 = JSIL.Memoize($asm_CSharpXamlForHtml5.CSHTML5.Internal.StartupAssemblyInfo)) ();
  };
  var $T04 = function () {
    return ($T04 = JSIL.Memoize($asm_CSharpXamlForHtml5.Windows.UI.Xaml.ResourceDictionary)) ();
  };

  function App__ctor () {
    $T00().prototype['_ctor'].call(this);
    this['InitializeComponent']();
    var mainPage = new ($T01())();
    $T02().Window$Current$value['set_Content'](mainPage);
  };

  function App_InitializeComponent () {
    if (this._contentLoaded) {
      return;
    }
    this._contentLoaded = true;
    $T03().OutputRootPath = "Output\\";
    $T03().OutputAppFilesPath = "app-cshtml5\\app\\";
    $T03().OutputLibrariesPath = "app-cshtml5\\libs\\";
    $T03().OutputResourcesPath = "app-cshtml5\\res\\";
    var ResourceDictionary_38ec129a75794abcb88a9bdc791661a4 = new ($T04())();
    this['set_Resources'](ResourceDictionary_38ec129a75794abcb88a9bdc791661a4);
  };

  JSIL.MakeType({
      BaseType: $asm_CSharpXamlForHtml5.TypeRef("Windows.UI.Xaml.Application"), 
      Name: "HTML5.App", 
      IsPublic: true, 
      IsReferenceType: true, 
      MaximumConstructorArguments: 0, 
    }, function ($interfaceBuilder) {
    $ = $interfaceBuilder;

    $.Method({Static:false, Public:true }, ".ctor", 
      JSIL.MethodSignature.Void, 
      App__ctor
    );

    $.Method({Static:false, Public:true }, "InitializeComponent", 
      JSIL.MethodSignature.Void, 
      App_InitializeComponent
    );

    $['Field']({Static:false, Public:false}, "_contentLoaded", $.Boolean); 
    return function (newThisType) { $thisType = newThisType; }; 
  });

})();

/* enum HTML5.CharacterName */ 

JSIL.MakeEnum(
  {
    FullName: "HTML5.CharacterName", 
    BaseType: $asm_mscorlib.TypeRef("System.Int32"), 
    IsPublic: true, 
    IsFlags: false, 
  }, 
  {
    Sherlock_Shellinford: 0, 
    Yuzurizaki_Nero: 1, 
    Hercule_Burton: 2, 
    Cordelia_Glauca: 3, 
    Akechi_Kokoro: 4, 
    Hasegawa_Hirano: 5, 
    Toyama_Saku: 6, 
    Zenigata_Tsugiko: 7, 
    Arsene: 8, 
    Twenty: 9, 
    Stone_River: 10, 
    rat: 11, 
    Tokiwa_Kazumi: 12, 
    Myojingawa_Alice: 13, 
    Kobayashi_Opera: 14, 
    Ellery_Himeyuri: 15, 
    Amagi_Marine: 16, 
    Hojo_Miki: 17, 
  }
);

/* class HTML5.CharacterColorConverter */ 

(function CharacterColorConverter$Members () {
  var $, $thisType;
  var $T00 = function () {
    return ($T00 = JSIL.Memoize($asm_mscorlib.System.Object)) ();
  };
  var $T01 = function () {
    return ($T01 = JSIL.Memoize($asm_mscorlib.System.Type)) ();
  };
  var $T02 = function () {
    return ($T02 = JSIL.Memoize($asm_mscorlib.System.String)) ();
  };
  var $T03 = function () {
    return ($T03 = JSIL.Memoize($asm_CSharpXamlForHtml5.Windows.UI.Color)) ();
  };
  var $T04 = function () {
    return ($T04 = JSIL.Memoize($asm_CSharpXamlForHtml5.Windows.UI.Colors)) ();
  };
  var $T05 = function () {
    return ($T05 = JSIL.Memoize($asm_HTML5.HTML5.CharacterName)) ();
  };
  var $T06 = function () {
    return ($T06 = JSIL.Memoize($asm_CSharpXamlForHtml5.Windows.UI.Xaml.Media.SolidColorBrush)) ();
  };
  var $T07 = function () {
    return ($T07 = JSIL.Memoize($asm_mscorlib.System.NotImplementedException)) ();
  };
  var $S00 = function () {
    return ($S00 = JSIL.Memoize(new JSIL.ConstructorSignature($asm_CSharpXamlForHtml5.TypeRef("Windows.UI.Xaml.Media.SolidColorBrush"), [$asm_CSharpXamlForHtml5.TypeRef("Windows.UI.Color")]))) ();
  };
  var $S01 = function () {
    return ($S01 = JSIL.Memoize(new JSIL.ConstructorSignature($asm_mscorlib.TypeRef("System.NotImplementedException"), null))) ();
  };

  function CharacterColorConverter__ctor () {
  };

  function CharacterColorConverter_Convert (value, targetType, parameter, language) {
    if (value === null) {
      return null;
    }
    var brushColor = $T04()['get_White']()['MemberwiseClone']();
    switch (($T05().$Cast(value))['valueOf']()) {
      case 0: 
        brushColor = $T04()['get_DeepPink']()['MemberwiseClone']();
        break;

      case 1: 
        brushColor = $T04()['get_Yellow']()['MemberwiseClone']();
        break;

      case 2: 
        brushColor = $T04()['get_Green']()['MemberwiseClone']();
        break;

      case 3: 
        brushColor = $T04()['get_SkyBlue']()['MemberwiseClone']();
        break;

      case 4: 
        brushColor = $T04()['get_LightYellow']()['MemberwiseClone']();
        break;

      case 5: 
        brushColor = $T04()['get_DarkGray']()['MemberwiseClone']();
        break;

      case 6: 
        brushColor = $T04()['get_LightPink']()['MemberwiseClone']();
        break;

      case 7: 
        brushColor = $T04()['get_LawnGreen']()['MemberwiseClone']();
        break;

      case 8: 
        brushColor = $T04()['get_Purple']()['MemberwiseClone']();
        break;

      case 9: 
        brushColor = $T04()['get_Black']()['MemberwiseClone']();
        break;

      case 10: 
        brushColor = $T04()['get_Black']()['MemberwiseClone']();
        break;

      case 11: 
        brushColor = $T04()['get_Black']()['MemberwiseClone']();
        break;

      case 12: 
        brushColor = $T04()['get_DarkSlateBlue']()['MemberwiseClone']();
        break;

      case 13: 
        brushColor = $T04()['get_WhiteSmoke']()['MemberwiseClone']();
        break;

      case 14: 
        brushColor = $T04()['get_SaddleBrown']()['MemberwiseClone']();
        break;

      case 15: 
        brushColor = $T04()['get_RoyalBlue']()['MemberwiseClone']();
        break;

      case 16: 
        brushColor = $T04()['get_Orange']()['MemberwiseClone']();
        break;

      case 17: 
        brushColor = $T04()['get_Violet']()['MemberwiseClone']();
        break;

    }
    return $S00().Construct(brushColor['MemberwiseClone']());
  };

  function CharacterColorConverter_ConvertBack (value, targetType, parameter, language) {
    throw $S01().Construct();
  };

  JSIL.MakeType({
      BaseType: $asm_mscorlib.TypeRef("System.Object"), 
      Name: "HTML5.CharacterColorConverter", 
      IsPublic: true, 
      IsReferenceType: true, 
      MaximumConstructorArguments: 0, 
    }, function ($interfaceBuilder) {
    $ = $interfaceBuilder;

    $.Method({Static:false, Public:true }, ".ctor", 
      JSIL.MethodSignature.Void, 
      CharacterColorConverter__ctor
    );

    $.Method({Static:false, Public:true , Virtual:true }, "Convert", 
      new JSIL.MethodSignature($.Object, [
          $.Object, $asm_mscorlib.TypeRef("System.Type"), 
          $.Object, $.String
        ]), 
      CharacterColorConverter_Convert
    );

    $.Method({Static:false, Public:true , Virtual:true }, "ConvertBack", 
      new JSIL.MethodSignature($.Object, [
          $.Object, $asm_mscorlib.TypeRef("System.Type"), 
          $.Object, $.String
        ]), 
      CharacterColorConverter_ConvertBack
    );

    $.ImplementInterfaces(
      /* 0 */ $asm_CSharpXamlForHtml5.TypeRef("Windows.UI.Xaml.Data.IValueConverter")
    );

    return function (newThisType) { $thisType = newThisType; }; 
  });

})();

/* class HTML5.MainPage */ 

(function MainPage$Members () {
  var $, $thisType;
  var $T00 = function () {
    return ($T00 = JSIL.Memoize($asm_CSharpXamlForHtml5.Windows.UI.Xaml.Controls.Page)) ();
  };
  var $T01 = function () {
    return ($T01 = JSIL.Memoize($asm_CSharpXamlForHtml5.Windows.UI.Xaml.Controls.ItemsControl)) ();
  };
  var $T02 = function () {
    return ($T02 = JSIL.Memoize($asm_mscorlib.System.Enum)) ();
  };
  var $T03 = function () {
    return ($T03 = JSIL.Memoize($asm_HTML5.HTML5.CharacterName)) ();
  };
  var $T04 = function () {
    return ($T04 = JSIL.Memoize($asm_CSharpXamlForHtml5.Windows.UI.Xaml.Controls.Primitives.Selector)) ();
  };
  var $T05 = function () {
    return ($T05 = JSIL.Memoize($asm_HTML5.HTML5.CharacterColorConverter)) ();
  };
  var $T06 = function () {
    return ($T06 = JSIL.Memoize($asm_CSharpXamlForHtml5.Windows.UI.Xaml.ResourceDictionary)) ();
  };
  var $T07 = function () {
    return ($T07 = JSIL.Memoize($asm_CSharpXamlForHtml5.Windows.UI.Xaml.FrameworkElement)) ();
  };
  var $T08 = function () {
    return ($T08 = JSIL.Memoize($asm_CSharpXamlForHtml5.Windows.UI.Xaml.Controls.Grid)) ();
  };
  var $T09 = function () {
    return ($T09 = JSIL.Memoize($asm_CSharpXamlForHtml5.Windows.UI.Xaml.Controls.RowDefinition)) ();
  };
  var $T0A = function () {
    return ($T0A = JSIL.Memoize($asm_CSharpXamlForHtml5.Windows.UI.Xaml.GridLength)) ();
  };
  var $T0B = function () {
    return ($T0B = JSIL.Memoize($asm_CSharpXamlForHtml5.DotNetForHtml5.Core.TypeFromStringConverters)) ();
  };
  var $T0C = function () {
    return ($T0C = JSIL.Memoize($asm_mscorlib.System.Collections.ObjectModel.Collection$b1.Of($asm_CSharpXamlForHtml5.Windows.UI.Xaml.Controls.RowDefinition))) ();
  };
  var $T0D = function () {
    return ($T0D = JSIL.Memoize($asm_CSharpXamlForHtml5.Windows.UI.Xaml.Controls.ComboBox)) ();
  };
  var $T0E = function () {
    return ($T0E = JSIL.Memoize($asm_mscorlib.System.Int32)) ();
  };
  var $T0F = function () {
    return ($T0F = JSIL.Memoize($asm_CSharpXamlForHtml5.Windows.UI.Xaml.Controls.UserControl)) ();
  };
  var $T10 = function () {
    return ($T10 = JSIL.Memoize($asm_CSharpXamlForHtml5.Windows.UI.Xaml.Shapes.Rectangle)) ();
  };
  var $T11 = function () {
    return ($T11 = JSIL.Memoize($asm_CSharpXamlForHtml5.Windows.UI.Xaml.Data.Binding)) ();
  };
  var $T12 = function () {
    return ($T12 = JSIL.Memoize($asm_CSharpXamlForHtml5.Windows.UI.Xaml.PropertyPath)) ();
  };
  var $T13 = function () {
    return ($T13 = JSIL.Memoize($asm_CSharpXamlForHtml5.System.Windows.Markup.StaticResourceExtension)) ();
  };
  var $T14 = function () {
    return ($T14 = JSIL.Memoize($asm_mscorlib.System.Collections.ObjectModel.Collection$b1.Of($asm_CSharpXamlForHtml5.Windows.UI.Xaml.UIElement))) ();
  };
  var $T15 = function () {
    return ($T15 = JSIL.Memoize($asm_CSharpXamlForHtml5.Windows.UI.Xaml.Controls.Panel)) ();
  };
  var $T16 = function () {
    return ($T16 = JSIL.Memoize($asm_mscorlib.System.Collections.Generic.List$b1.Of($asm_mscorlib.System.Object))) ();
  };
  var $T17 = function () {
    return ($T17 = JSIL.Memoize($asm_CSharpXamlForHtml5.Windows.UI.Xaml.Data.IValueConverter)) ();
  };
  var $T18 = function () {
    return ($T18 = JSIL.Memoize($asm_CSharpXamlForHtml5_System_Xaml_dll.System.Windows.Markup.MarkupExtension)) ();
  };
  var $T19 = function () {
    return ($T19 = JSIL.Memoize($asm_CSharpXamlForHtml5.System.ServiceProvider)) ();
  };
  var $T1A = function () {
    return ($T1A = JSIL.Memoize($asm_CSharpXamlForHtml5.Windows.UI.Xaml.DependencyObject)) ();
  };
  var $T1B = function () {
    return ($T1B = JSIL.Memoize($asm_CSharpXamlForHtml5.Windows.UI.Xaml.Shapes.Shape)) ();
  };
  var $S00 = function () {
    return ($S00 = JSIL.Memoize(new JSIL.ConstructorSignature($asm_CSharpXamlForHtml5.TypeRef("Windows.UI.Xaml.Data.Binding"), null))) ();
  };
  var $S01 = function () {
    return ($S01 = JSIL.Memoize(new JSIL.ConstructorSignature($asm_CSharpXamlForHtml5.TypeRef("System.Windows.Markup.StaticResourceExtension"), null))) ();
  };
  var $S02 = function () {
    return ($S02 = JSIL.Memoize(new JSIL.ConstructorSignature($asm_mscorlib.TypeRef("System.Collections.Generic.List`1", [$asm_mscorlib.TypeRef("System.Object")]), null))) ();
  };

  function MainPage__ctor () {
    $T00().prototype['_ctor'].call(this);
    this['InitializeComponent']();
    (this.CharacterComboBox)['set_ItemsSource']($T02()['GetValues']($T03().__Type__));
    (this.CharacterComboBox)['set_SelectedIndex'](0);
  };

  function MainPage_InitializeComponent () {
    if (this._contentLoaded) {
      return;
    }
    this._contentLoaded = true;
    var CharacterColorConverter_c218c3a1a9344144b1f5686d87d8cc7b = new ($T05())();
    (this['get_Resources']())['set_Item']("CharacterColorConverterKey", CharacterColorConverter_c218c3a1a9344144b1f5686d87d8cc7b);
    var Grid_4a10ea214d3442498888058e10e4b5f6 = new ($T08())();
    var RowDefinition_26dee2549b274f849a06dbe055e3a6e8 = new ($T09())();
    (RowDefinition_26dee2549b274f849a06dbe055e3a6e8.Height = $T0A().$Cast($T0B()['ConvertFromInvariantString']($T0A().__Type__, "Auto"))['MemberwiseClone']());
    var RowDefinition_8e5281da86d245fa9e0733a4fe325cff = new ($T09())();
    (RowDefinition_8e5281da86d245fa9e0733a4fe325cff.Height = $T0A().$Cast($T0B()['ConvertFromInvariantString']($T0A().__Type__, "*"))['MemberwiseClone']());
    (Grid_4a10ea214d3442498888058e10e4b5f6['get_RowDefinitions']())['Add'](RowDefinition_26dee2549b274f849a06dbe055e3a6e8);
    (Grid_4a10ea214d3442498888058e10e4b5f6['get_RowDefinitions']())['Add'](RowDefinition_8e5281da86d245fa9e0733a4fe325cff);
    var ComboBox_0c0caee0a0cc4786b2b7622d85a54880 = new ($T0D())();
    $T08()['SetRow'](ComboBox_0c0caee0a0cc4786b2b7622d85a54880, $T0E().$Cast($T0B()['ConvertFromInvariantString']($T0E().__Type__, "0")));
    $T0F().prototype['RegisterName'].call(this, "CharacterComboBox", ComboBox_0c0caee0a0cc4786b2b7622d85a54880);
    ComboBox_0c0caee0a0cc4786b2b7622d85a54880['set_Name']("CharacterComboBox");
    var Rectangle_8f42c19e999c4169904d6bfd0f2056b7 = new ($T10())();
    $T08()['SetRow'](Rectangle_8f42c19e999c4169904d6bfd0f2056b7, $T0E().$Cast($T0B()['ConvertFromInvariantString']($T0E().__Type__, "1")));
    var Binding_6663152ee0cd4bc28a1b1841a6e73bf7 = $S00().Construct();
    Binding_6663152ee0cd4bc28a1b1841a6e73bf7['set_Path']($T12().$Cast($T0B()['ConvertFromInvariantString']($T12().__Type__, "SelectedItem")));
    var StaticResourceExtension_68eff9beec8d435b9bd86ee4c342c428 = $S01().Construct();
    StaticResourceExtension_68eff9beec8d435b9bd86ee4c342c428.StaticResourceExtension$ResourceKey$value = "CharacterColorConverterKey";
    (Grid_4a10ea214d3442498888058e10e4b5f6['get_Children']())['Add'](ComboBox_0c0caee0a0cc4786b2b7622d85a54880);
    (Grid_4a10ea214d3442498888058e10e4b5f6['get_Children']())['Add'](Rectangle_8f42c19e999c4169904d6bfd0f2056b7);
    this['set_Content'](Grid_4a10ea214d3442498888058e10e4b5f6);
    this.CharacterComboBox = ComboBox_0c0caee0a0cc4786b2b7622d85a54880;
    var parents_82cf927cdc36419b8b0a0d5756847035 = $S02().Construct();
    parents_82cf927cdc36419b8b0a0d5756847035['Add'](Rectangle_8f42c19e999c4169904d6bfd0f2056b7);
    parents_82cf927cdc36419b8b0a0d5756847035['Add'](Grid_4a10ea214d3442498888058e10e4b5f6);
    parents_82cf927cdc36419b8b0a0d5756847035['Add'](this);
    Binding_6663152ee0cd4bc28a1b1841a6e73bf7['set_Converter']($T17().$Cast(StaticResourceExtension_68eff9beec8d435b9bd86ee4c342c428['ProvideValue'](new ($T19())(Binding_6663152ee0cd4bc28a1b1841a6e73bf7, null, parents_82cf927cdc36419b8b0a0d5756847035))));
    Binding_6663152ee0cd4bc28a1b1841a6e73bf7['set_Source'](ComboBox_0c0caee0a0cc4786b2b7622d85a54880);
    Rectangle_8f42c19e999c4169904d6bfd0f2056b7['SetBinding']($T1B().FillProperty, Binding_6663152ee0cd4bc28a1b1841a6e73bf7);
  };

  JSIL.MakeType({
      BaseType: $asm_CSharpXamlForHtml5.TypeRef("Windows.UI.Xaml.Controls.Page"), 
      Name: "HTML5.MainPage", 
      IsPublic: true, 
      IsReferenceType: true, 
      MaximumConstructorArguments: 0, 
    }, function ($interfaceBuilder) {
    $ = $interfaceBuilder;

    $.Method({Static:false, Public:true }, ".ctor", 
      JSIL.MethodSignature.Void, 
      MainPage__ctor
    );

    $.Method({Static:false, Public:true }, "InitializeComponent", 
      JSIL.MethodSignature.Void, 
      MainPage_InitializeComponent
    );

    $['Field']({Static:false, Public:false}, "CharacterComboBox", $asm_CSharpXamlForHtml5.TypeRef("Windows.UI.Xaml.Controls.ComboBox")); 
    $['Field']({Static:false, Public:false}, "_contentLoaded", $.Boolean); 
    $.ImplementInterfaces(
    );

    return function (newThisType) { $thisType = newThisType; }; 
  });

})();

