/**
 * Namespace for Definition Handlers functions.
 */
Type.registerNamespace("UIBeardcore.Editors.ListExtensions.DefinitionHandlers");

UIBeardcore.Editors.ListExtensions.DefinitionHandlers.HandleExtensionItemDefinition = function UIBeardcore$Translators$HandleExtensionItemDefinition(editorName, view, controlId, itemId)
{
	if ($models.getItemType(itemId) == $const.ItemType.FOLDER)
	{
		return $config.expandEditorPath("/Xml/Definitions/HandlerListDefinition.xml", editorName);
	}
	
	return $config.expandEditorPath("/Xml/Definitions/HandlerListDefinition.xml", editorName);
};