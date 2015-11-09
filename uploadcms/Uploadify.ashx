<%@ WebHandler Language="C#" Class="Uploadify" %>

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;
using uploadCMS.Config;
//using tgdd.business;
using cms.business;


/// <summary>
/// Summary description for Uploadify
/// </summary>
public class Uploadify : IHttpHandler
{

    public void ProcessRequest(HttpContext context)
    {
        context.Response.ContentType = "text/plain";
        context.Response.Expires = -1;
        try
        {
            HttpPostedFile postedFile = context.Request.Files["Filedata"];

            string savepath = "";
            string tempPath = "";
            string siteId = "", cateId = "", productId = "", albumId="", userName ="", colorId="",module="";
            siteId = context.Request["siteid"];
            //cateId = context.Request["amp;categoryid"];
            //productId = context.Request["amp;productid"];
            //userName = context.Request["amp;user"];
            //colorId = context.Request["amp;colorid"];
            ////tempPath = context.Request["siteid"] + "_" + context.Request["amp;categoryid"] + "_" + context.Request["amp;productid"];
            //string flag = context.Request["amp;flag"];
            
            
            cateId = context.Request["categoryid"];
            productId = context.Request["productid"];
            albumId = context.Request["albumid"];
            userName = context.Request["user"];
            colorId = context.Request["colorid"];
            
            module = context.Request["module"];
            string flag = context.Request["flag"];
            string strImageUploadPath = ""; 
            string strImageViewPath = "";
            if (module == "0")  //product
            {
                string imageType = context.Request["imagetype"];
                cms.business.CMS.ProductSvc.ProductBO objProduct = cms.business.repositories.CMSProductRepository.Current.GetProductBySiteID(Convert.ToInt32(productId), Convert.ToInt32(siteId));
                string strUrl = SEOHelper.GenSEOUrl(objProduct.URL, objProduct.ProductName);
                string strFile = postedFile.FileName.ToLower().Replace(" ", "");
                if (strFile.IndexOf(strUrl) == -1)
                {
                    context.Response.Write("Tên file phải chứa URL của sản phẩm");
                }
                else
                {
                    strImageUploadPath = cms.business.ConfigHelper.GetString("Product.ImageUploadPath") + "\\" + cateId + "\\" + productId;
                    if(siteId == "1")
                        strImageViewPath = cms.business.ConfigHelper.GetString("Product.ImageViewPath") + "/" + cateId + "/" + productId;
                    else
                        strImageViewPath = cms.business.ConfigHelper.GetString("Product.ImageViewPathDM") + "/" + cateId + "/" + productId;
                    if (flag == "3")
                    {
                        strImageUploadPath = strImageUploadPath + "\\Image360";
                        strImageViewPath = strImageViewPath + "/Image360";
                    }
                    else if (flag == "5" || flag == "6")
                    {
                        strImageUploadPath = strImageUploadPath + "\\Feature";
                        strImageViewPath = strImageViewPath + "/Feature";
                    }
                    else if (flag == "8") //camera gallery
                    {
                        strImageUploadPath = strImageUploadPath + "\\CameraGallery";
                        strImageViewPath = strImageViewPath + "/CameraGallery";
                    }
                    else if (flag == "9" || flag == "10")
                    {
                        strImageUploadPath = strImageUploadPath + "\\Kit";
                        strImageViewPath = strImageViewPath + "/Kit";
                    }
                    else if (flag == "11")
                    {
                        strImageUploadPath = strImageUploadPath + "\\os";
                        strImageViewPath = strImageViewPath + "/os";
                    }
                    else if (flag == "12")
                    {
                        strImageUploadPath = strImageUploadPath + "\\compare";
                        strImageViewPath = strImageViewPath + "/compare";
                    }
                    savepath = strImageUploadPath;
                    if (!Directory.Exists(savepath))
                    {
                        Directory.CreateDirectory(savepath);
                    }
                    if (flag == "1")
                    {

                        uploadCMS.Repositories.UploadCMSRepositories urs = new uploadCMS.Repositories.UploadCMSRepositories();
                        if (urs.SaveImage(postedFile, savepath, siteId) == 1)
                        {

                            context.Response.StatusCode = 200;

                        }
                        else
                        {
                            context.Response.StatusCode = 400;
                        }

                    }
                    else if (flag == "2")
                    {
                        uploadCMS.Repositories.UploadCMSRepositories urs = new uploadCMS.Repositories.UploadCMSRepositories();
                        if (urs.SaveImageHinhGocCanh_Hinh360(postedFile, savepath, cateId, productId, colorId, userName, 2, siteId) == 1)
                        {
                            context.Response.StatusCode = 200;
                        }
                        else
                        {
                            context.Response.StatusCode = 400;
                        }
                    }
                    else if (flag == "3")
                    {
                        uploadCMS.Repositories.UploadCMSRepositories urs = new uploadCMS.Repositories.UploadCMSRepositories();
                        if (urs.SaveImageHinhGocCanh_Hinh360(postedFile, savepath, cateId, productId, "", userName, 3, siteId) == 1)
                        {
                            context.Response.StatusCode = 200;
                        }
                        else
                        {
                            context.Response.StatusCode = 400;
                        }
                    }
                    else if (flag == "4")
                        savepath = context.Server.MapPath("Uploads/video/" + tempPath);
                    else if (flag == "5")
                    {
                        uploadCMS.Repositories.UploadCMSRepositories urs = new uploadCMS.Repositories.UploadCMSRepositories();
                        if (urs.SaveImageFeature(postedFile, savepath, cateId, productId, "", userName, 5, siteId) == 1)
                        {
                            context.Response.StatusCode = 200;
                        }
                        else
                        {
                            context.Response.StatusCode = 400;
                        }
                    }
                    else if (flag == "6")
                    {
                        uploadCMS.Repositories.UploadCMSRepositories urs = new uploadCMS.Repositories.UploadCMSRepositories();
                        if (urs.SaveImageFeature(postedFile, savepath, cateId, productId, "", userName, 6, siteId) == 1)
                        {
                            context.Response.StatusCode = 200;
                        }
                        else
                        {
                            context.Response.StatusCode = 400;
                        }
                    }
                    else if (flag == "8")
                    {
                        uploadCMS.Repositories.UploadCMSRepositories urs = new uploadCMS.Repositories.UploadCMSRepositories();
                        if (urs.SaveImageHinhGocCanh_Hinh360(postedFile, savepath, cateId, productId, colorId, userName, 8, siteId) == 1)
                        {
                            context.Response.StatusCode = 200;
                        }
                        else
                        {
                            context.Response.StatusCode = 400;
                        }
                    }
                    else if (flag == "9")
                    {
                        uploadCMS.Repositories.UploadCMSRepositories urs = new uploadCMS.Repositories.UploadCMSRepositories();
                        if (urs.SaveImageBoBanHangChuan(postedFile, savepath, cateId, productId, userName, siteId) == 1)
                        {
                            context.Response.StatusCode = 200;
                        }
                        else
                        {
                            context.Response.StatusCode = 400;
                        }
                    }
                    else if (flag == "10")
                    {
                        uploadCMS.Repositories.UploadCMSRepositories urs = new uploadCMS.Repositories.UploadCMSRepositories();
                        if (urs.SaveImageBoBanHangChuan_thongsokithuat(postedFile, savepath, cateId, productId, userName, siteId) == 1)
                        {
                            context.Response.StatusCode = 200;
                        }
                        else
                        {
                            context.Response.StatusCode = 400;
                        }
                    }
                    else if (flag == "11")
                    {
                        uploadCMS.Repositories.UploadCMSRepositories urs = new uploadCMS.Repositories.UploadCMSRepositories();
                        if (urs.SaveImageHinhGocCanh_Hinh360(postedFile, savepath, cateId, productId, colorId, userName, 11, siteId) == 1)
                        {
                            context.Response.StatusCode = 200;
                        }
                        else
                        {
                            context.Response.StatusCode = 400;
                        }
                    }
                    else if (flag == "12")
                    {
                        uploadCMS.Repositories.UploadCMSRepositories urs = new uploadCMS.Repositories.UploadCMSRepositories();
                        if (urs.SaveImageCompare(postedFile, savepath, cateId, productId, imageType, userName, siteId) == 1)
                        {
                            context.Response.StatusCode = 200;
                        }
                        else
                        {
                            context.Response.StatusCode = 400;
                        }
                    }
                }
            }
            else if (module == "1") //1 : news
            {
                //cms.business.repositories.CMSNewsRepository objNews = new cms.business.repositories.CMSNewsRepository();
                //cms.business.CMS.NewsSvc.NewsBO nbo = objNews.GetNewsCMS(Convert.ToInt32(productId));
                cms.business.repositories.CMSNewsRepository objNews = new cms.business.repositories.CMSNewsRepository();
                cms.business.CMS.NewsSvc.NewsBO nbo = objNews.GetNewsInfo(Convert.ToInt32(productId));
                string strDate = Convert.ToDateTime(nbo.CreatedDate).ToString("yyyy/MM/dd");
                string strDateUpload = nbo.CreatedDate.Value.Year.ToString("0000") + "\\" + nbo.CreatedDate.Value.Month.ToString("00") + "\\" + nbo.CreatedDate.Value.Day.ToString("00");

                strImageUploadPath = ConfigHelper.GetString("News.UploadImagePath") + "\\" + strDateUpload + "\\" + productId;
                if(siteId == "1")
                    strImageViewPath = ConfigHelper.GetString("News.ImageViewPath") + "/" + strDate + "/" + productId;
                else
                    strImageViewPath = ConfigHelper.GetString("News.ImageViewPathDM") + "/" + strDate + "/" + productId;


                savepath = strImageUploadPath;
                if(flag =="2")
                    savepath = savepath + "\\Gallery";
                if (!Directory.Exists(savepath))
                {
                    Directory.CreateDirectory(savepath);
                }
                uploadCMS.Repositories.UploadCMSRepositories urs = new uploadCMS.Repositories.UploadCMSRepositories();
                if (flag == "2")
                {

                    if (urs.SaveImageNewsHgc(postedFile, savepath, siteId, productId, albumId, userName) == 1)
                    {

                        context.Response.StatusCode = 200;

                    }
                    else
                    {
                        context.Response.StatusCode = 400;
                    } 
                }
                else
                {
                    if (urs.SaveImageNews(postedFile, savepath, siteId, productId, userName) == 1)
                    {

                        context.Response.StatusCode = 200;

                    }
                    else
                    {
                        context.Response.StatusCode = 400;
                    }
                }
            }
            else //game
            {
                strImageUploadPath = cms.business.ConfigHelper.GetString("Product.ImageUploadPath") + "\\" + cateId + "\\" + productId;
                if(siteId == "1")
                    strImageViewPath = cms.business.ConfigHelper.GetString("Product.ImageViewPath") + "/" + cateId + "/" + productId;
                else
                    strImageViewPath = cms.business.ConfigHelper.GetString("Product.ImageViewPathDM") + "/" + cateId + "/" + productId;
                if (flag == "3")
                {
                    strImageUploadPath = strImageUploadPath + "\\Image360";
                    strImageViewPath = strImageViewPath + "/Image360";
                }
                else if (flag == "5" || flag == "6")
                {
                    strImageUploadPath = strImageUploadPath + "\\Feature";
                    strImageViewPath = strImageViewPath + "/Feature";
                }
                savepath = strImageUploadPath;
                if (!Directory.Exists(savepath))
                {
                    Directory.CreateDirectory(savepath);
                }
                if (flag == "1")
                {

                    uploadCMS.Repositories.UploadCMSRepositories urs = new uploadCMS.Repositories.UploadCMSRepositories();
                    if (urs.SaveImageGame(postedFile, savepath, siteId) == 1)
                    {

                        context.Response.StatusCode = 200;

                    }
                    else
                    {
                        context.Response.StatusCode = 400;
                    }

                }
                else if (flag == "2")
                {
                    uploadCMS.Repositories.UploadCMSRepositories urs = new uploadCMS.Repositories.UploadCMSRepositories();
                    if (urs.SaveImageHinhGocCanh_Hinh360(postedFile, savepath, cateId, productId, colorId, userName, 2, siteId) == 1)
                    {
                        context.Response.StatusCode = 200;
                    }
                    else
                    {
                        context.Response.StatusCode = 400;
                    }
                }
                else if (flag == "3")
                {
                    uploadCMS.Repositories.UploadCMSRepositories urs = new uploadCMS.Repositories.UploadCMSRepositories();
                    if (urs.SaveImageHinhGocCanh_Hinh360(postedFile, savepath, cateId, productId, "", userName, 3, siteId) == 1)
                    {
                        context.Response.StatusCode = 200;
                    }
                    else
                    {
                        context.Response.StatusCode = 400;
                    }
                }
                else if (flag == "4")
                    savepath = context.Server.MapPath("Uploads/video/" + tempPath);
                else if (flag == "5")
                {
                    uploadCMS.Repositories.UploadCMSRepositories urs = new uploadCMS.Repositories.UploadCMSRepositories();
                    if (urs.SaveImageFeature(postedFile, savepath, cateId, productId, "", userName, 5, siteId) == 1)
                    {
                        context.Response.StatusCode = 200;
                    }
                    else
                    {
                        context.Response.StatusCode = 400;
                    }
                }
                else if (flag == "6")
                {
                    uploadCMS.Repositories.UploadCMSRepositories urs = new uploadCMS.Repositories.UploadCMSRepositories();
                    if (urs.SaveImageFeature(postedFile, savepath, cateId, productId, "", userName, 6, siteId) == 1)
                    {
                        context.Response.StatusCode = 200;
                    }
                    else
                    {
                        context.Response.StatusCode = 400;
                    }
                }
               
            }
          
           
            
            //string filename = postedFile.FileName;

            context.Response.Write("");

            
            //filename = uploadCMS.Core.UploadCMSCore.RenameFile(filename,"");
            //postedFile.SaveAs(savepath + @"\" + filename);
            //context.Response.Write(tempPath + "/" + filename);
            //context.Response.StatusCode = 200;
            
        }
        catch (Exception ex)
        {
            context.Response.Write("");
            //context.Response.Write("Error: " + ex.Message);
        }
    }
    
    public bool IsReusable
    {
        get
        {
            return false;
        }
    }
}
