/**
 * router
 */

 /**config */
import AssetCatagory from "./config_management/AssetCatagory.vue";
import AssetOrigin from "./config_management/AssetOrigin.vue";
import AssetState from "./config_management/AssetState.vue";
import AssetUnit from "./config_management/AssetUnit.vue";
import AuthConfig from "./config_management/AuthConfig.vue";
import DepreciationConfig from "./config_management/DepreciationConfig.vue";
import ProcessConfig from "./config_management/ProcessConfig.vue";

/**statistics */
import ChartStatistics from "./assets_statistics/ChartStatistics.vue";




export const compos =  {
    AssetCatagory,
    AssetOrigin,
    AssetState,
    AssetUnit,
    AuthConfig,
    DepreciationConfig,
    ProcessConfig,
    ChartStatistics
};

export const composMapping = {
    "资产单位": "AssetUnit",
    "资产分类": "AssetCatagory",
    "资产状态": "AssetState",
    "资产来源": "AssetOrigin",
    "折旧配置": "DepreciationConfig",
    "权限配置": "AuthConfig",
    "流程配置": "ProcessConfig"
};




function getCompoByMenu(menu) {
    return (
        menu
        ? composMapping[menu]
        : ""
    );
}

export default {
    getCompoByMenu
};
