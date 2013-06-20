
/**
 * Namespace for translator functions (one value in, "translated" value out) that are mostly used in list definitions.
 */
Type.registerNamespace("UIBeardcore.Editors.ListExtensions.Translators");

UIBeardcore.Editors.ListExtensions.Translators._getVowelsPercentage = function _getVowelsPercentage(str)
{
	if (str)
	{
		var m = str.match(/[aeiou]/ig);
		return ~~(100 * (m && m.length) / str.length);
	}
	return 0;
};

UIBeardcore.Editors.ListExtensions.Translators.BeardcoreTranslator = function UIBeardcore$Translators$BeardcoreTranslator(value)
{
	return "{0}%".format(UIBeardcore.Editors.ListExtensions.Translators._getVowelsPercentage(value));
};

UIBeardcore.Editors.ListExtensions.Translators.BeardcoreTranslatorColor = function UIBeardcore$Translators$BeardcoreTranslatorColor(value)
{
	if (value)
	{
		return "<div style=\"width: 95px; height: 16px; border: 1px solid #86a6f7\"><img src=\"{0}\" style=\"width:{1}%; height:100%; border-right: 1px solid #C3D3FB; background:url('data:image/png;base64,{2}') transparent;\" /></div>".format(
			$config.expandThemePath("Images/Views/Transparent.gif", $const.CMEEditorName),
			UIBeardcore.Editors.ListExtensions.Translators._getVowelsPercentage(value),
			"iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAIklEQVQIW2NkQALty7/XM8L4IE5lJGcjWADGAbEZkTkgAQDH1w6pd+eZMgAAAABJRU5ErkJggg=="
		);
	}
	return "";
};