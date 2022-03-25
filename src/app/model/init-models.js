var DataTypes = require("sequelize").DataTypes;
var _ACCESS = require("./ACCESS");
var _ALERT = require("./ALERT");
var _BANNER = require("./BANNER");
var _BANNER_IMG = require("./BANNER_IMG");
var _BUILDING = require("./BUILDING");
var _BUSINESS_LICENSE = require("./BUSINESS_LICENSE");
var _CERTIFICATE = require("./CERTIFICATE");
var _COMPANY_ABILITIES = require("./COMPANY_ABILITIES");
var _COMPANY_CERTIFICATE = require("./COMPANY_CERTIFICATE");
var _COUPON = require("./COUPON");
var _ISSUED_COUPON = require("./ISSUED_COUPON");
var _KEYWORD = require("./KEYWORD");
var _KEYWORD_ASSIGNED = require("./KEYWORD_ASSIGNED");
var _POPULAR_AREA = require("./POPULAR_AREA");
var _REMODELING_APPLY_DIV2 = require("./REMODELING_APPLY_DIV2");
var _REMODELINGs = require("./REMODELINGs");
var _RESIDENT = require("./RESIDENT");
var _RMDL_DIV1 = require("./RMDL_DIV1");
var _RMDL_DIV2 = require("./RMDL_DIV2");
var _ROOT_AREA = require("./ROOT_AREA");
var _SECOND_AREA = require("./SECOND_AREA");
var _SPECIALIZED = require("./SPECIALIZED");
var _SequelizeMeta = require("./SequelizeMeta");
var _THEME = require("./THEME");
var _THEME_ASSIGNED = require("./THEME_ASSIGNED");
var _USER_HASH = require("./USER_HASH");
var _VALID_BUSINESS_LICENSE = require("./VALID_BUSINESS_LICENSE");
var _admin = require("./admin");
var _assign = require("./assign");
var _company = require("./company");
var _recommend = require("./recommend");
var _remodeling = require("./remodeling");
var _remodeling_apply = require("./remodeling_apply");
var _remodeling_img = require("./remodeling_img");
var _review = require("./review");
var _tutorials = require("./tutorials");
var _users = require("./users");

function initModels(sequelize) {
  var ACCESS = _ACCESS(sequelize, DataTypes);
  var ALERT = _ALERT(sequelize, DataTypes);
  var BANNER = _BANNER(sequelize, DataTypes);
  var BANNER_IMG = _BANNER_IMG(sequelize, DataTypes);
  var BUILDING = _BUILDING(sequelize, DataTypes);
  var BUSINESS_LICENSE = _BUSINESS_LICENSE(sequelize, DataTypes);
  var CERTIFICATE = _CERTIFICATE(sequelize, DataTypes);
  var COMPANY_ABILITIES = _COMPANY_ABILITIES(sequelize, DataTypes);
  var COMPANY_CERTIFICATE = _COMPANY_CERTIFICATE(sequelize, DataTypes);
  var COUPON = _COUPON(sequelize, DataTypes);
  var ISSUED_COUPON = _ISSUED_COUPON(sequelize, DataTypes);
  var KEYWORD = _KEYWORD(sequelize, DataTypes);
  var KEYWORD_ASSIGNED = _KEYWORD_ASSIGNED(sequelize, DataTypes);
  var POPULAR_AREA = _POPULAR_AREA(sequelize, DataTypes);
  var REMODELING_APPLY_DIV2 = _REMODELING_APPLY_DIV2(sequelize, DataTypes);
  var REMODELINGs = _REMODELINGs(sequelize, DataTypes);
  var RESIDENT = _RESIDENT(sequelize, DataTypes);
  var RMDL_DIV1 = _RMDL_DIV1(sequelize, DataTypes);
  var RMDL_DIV2 = _RMDL_DIV2(sequelize, DataTypes);
  var ROOT_AREA = _ROOT_AREA(sequelize, DataTypes);
  var SECOND_AREA = _SECOND_AREA(sequelize, DataTypes);
  var SPECIALIZED = _SPECIALIZED(sequelize, DataTypes);
  var SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);
  var THEME = _THEME(sequelize, DataTypes);
  var THEME_ASSIGNED = _THEME_ASSIGNED(sequelize, DataTypes);
  var USER_HASH = _USER_HASH(sequelize, DataTypes);
  var VALID_BUSINESS_LICENSE = _VALID_BUSINESS_LICENSE(sequelize, DataTypes);
  var admin = _admin(sequelize, DataTypes);
  var assign = _assign(sequelize, DataTypes);
  var company = _company(sequelize, DataTypes);
  var recommend = _recommend(sequelize, DataTypes);
  var remodeling = _remodeling(sequelize, DataTypes);
  var remodeling_apply = _remodeling_apply(sequelize, DataTypes);
  var remodeling_img = _remodeling_img(sequelize, DataTypes);
  var review = _review(sequelize, DataTypes);
  var tutorials = _tutorials(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  
  // associations
  review.belongsTo(remodeling_apply, { foreignKey: "remodeling_apply_id"});
  remodeling_apply.hasMany(review, { foreignKey: "remodeling_apply_id"});

  remodeling_apply.belongsToMany(company, {through: assign});
  company.belongsToMany(remodeling_apply, {through: assign});

  company.hasMany(assign, {foreignKey: "company_id"});
  assign.belongsTo(company, { foreignKey: "company_id"});
  
  remodeling.hasMany(remodeling_img, {foreignKey: 'remodeling_id'});
  remodeling_img.belongsTo(remodeling, {foreignKey: 'remodeling_id'});

  assign.belongsTo(remodeling_apply, { oreignKey: "remodeling_apply_id"});
  remodeling_apply.hasMany(assign, { foreignKey: "remodeling_apply_id"});

  USER_HASH.belongsTo(users, { as: "ID_user", foreignKey: "ID"});
  users.hasOne(USER_HASH, { as: "USER_HASH", foreignKey: "ID"});

  //
  return {
    ACCESS,
    ALERT,
    BANNER,
    BANNER_IMG,
    BUILDING,
    BUSINESS_LICENSE,
    CERTIFICATE,
    COMPANY_ABILITIES,
    COMPANY_CERTIFICATE,
    COUPON,
    ISSUED_COUPON,
    KEYWORD,
    KEYWORD_ASSIGNED,
    POPULAR_AREA,
    REMODELING_APPLY_DIV2,
    REMODELINGs,
    RESIDENT,
    RMDL_DIV1,
    RMDL_DIV2,
    ROOT_AREA,
    SECOND_AREA,
    SPECIALIZED,
    SequelizeMeta,
    THEME,
    THEME_ASSIGNED,
    USER_HASH,
    VALID_BUSINESS_LICENSE,
    admin,
    assign,
    company,
    recommend,
    remodeling,
    remodeling_apply,
    remodeling_img,
    review,
    tutorials,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
