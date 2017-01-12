<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wp_808');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'ENs?}-:|/^S@rgUq!,E2BzP<3dXZ1u98;e8>bZsm[7&}KnfFn+ /$z;Yo+$yQNT&');
define('SECURE_AUTH_KEY',  '5-UMWyZ$K]A5$1@ )V^:{s(H)<?Fpu}Oz * /%Ri4j~-IPg0e}497Avu=oKt>v[=');
define('LOGGED_IN_KEY',    'R{,s!Hw1 vjUD*0M(z$mxT[2AsNx4c,lC}&y&$RL#c}/+v}_W)|x!}*u!Ej]7)tG');
define('NONCE_KEY',        'h4VKo w,/j17NwaM{kTnQmJ +9U]//FRxo6W=Cg?1+{j|e1zXg&{?bT(|4$h`Ho%');
define('AUTH_SALT',        'u4si] >ywY:1)u76R-pg%!/}Fde7q=7L=s#48m+05#jXwjGUc`u!M]UO4}RP62!0');
define('SECURE_AUTH_SALT', ';2.+T&u`w&|1Yjy,B.ge<r0LoPk`N7$lV=.zb*n,mNg*gG!/5K|^jvBM8zDiH+az');
define('LOGGED_IN_SALT',   ')VZT[LG,SPy#tt/&g-sCa<VvN@@c=I2=#d|w>C 9fHrw|.!g-?+H2hHCPY4gtlf8');
define('NONCE_SALT',       'H4zVMuy<w=Mm{9&f};pf%Q0HJK9Dc3d2NmA`1dP< x]`vM6l(@_zq#;PN7(emBzy');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
