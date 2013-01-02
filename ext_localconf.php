<?php
	if (!defined ('TYPO3_MODE'))    die ('Access denied.');

		// unserializing the configuration so we can use it here:
	$_EXTCONF = unserialize($_EXTCONF);

		# Registrer TemplaVoila DataStructures
	$GLOBALS['TYPO3_CONF_VARS']['EXTCONF']['templavoila']['staticDataStructures'][] = array(
		'title' => 'FDF Leder: Default',
		'path' => 'EXT:' . $_EXTKEY . '/Resources/Private/DataStructures/Default.xml',
		'icon' => '',
		'scope' => 1,
	);
?>
