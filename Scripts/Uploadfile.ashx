<%@ WebHandler Language="C#" Class="Uploadfile" %>

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;
using cms.business.repositories;
using cms.business.CMS.NewsSvc;



/// <summary>
/// Summary description for Uploadfile
/// </summary>
public class Uploadfile : IHttpHandler
{

    public void ProcessRequest(HttpContext context)
    {
        context.Response.ContentType = "text/plain";
        context.Response.Expires = -1;
        try
        {
            HttpPostedFile postedFile = context.Request.Files["Filedata"];
            string savepath = "";
            string strDate = "";
            string userName = "";
            int iNewsID = 0;      
            userName = context.Request["user"];
            string newsID = context.Request["id"];
            int intType = 0;
            if (!string.IsNullOrEmpty(context.Request["type"]))
                intType = Convert.ToInt32(context.Request["type"]);
            if(intType == 1)
                postedFile = context.Request.Files["upload"];
            if (!string.IsNullOrEmpty(newsID))
                iNewsID = Convert.ToInt32(newsID);
            if(iNewsID == 0)                 
                savepath = context.Server.MapPath("~\\AttachFile\\" +userName);
            else
            {
                NewsBO objNews = CMSNewsRepository.Current.LoadInfo(iNewsID);
                strDate = Convert.ToDateTime(objNews.CreatedDate).ToString("yyyy/MM/dd");
                string strDateUpload = objNews.CreatedDate.Value.Year.ToString("0000") + "\\" + objNews.CreatedDate.Value.Month.ToString("00") + "\\" + objNews.CreatedDate.Value.Day.ToString("00");
                if(intType == 1)
                    savepath = cms.business.ConfigHelper.GetString("News.UploadImagePath") + "\\" + strDateUpload + "\\" + iNewsID;
                else
                    savepath = cms.business.ConfigHelper.GetString("News.UploadImagePath") + "\\" + strDateUpload + "\\" + iNewsID + "\\AttachFile";
            }
            if (!Directory.Exists(savepath))
            {
                Directory.CreateDirectory(savepath);
            }

            if (intType == 1)
            {
                if (iNewsID > 0)
                {
                    string filename = CMSNewsRepository.Current.RegexString(postedFile.FileName);
                    postedFile.SaveAs(savepath + @"\" + filename);
                    cms.business.ConfigHelper.CompressImage(savepath + @"\" + filename);
                    string url = cms.business.ConfigHelper.GetString("News.ImageViewPath") + "/" + strDate + "/" + iNewsID + "/" + filename;

                    context.Response.Write("<script type=\"text/javascript\">window.parent.CKEDITOR.tools.callFunction(2,\"" + url + "\", \"\");</script>");
                }
                else
                {
                    context.Response.Write("<script type=\"text/javascript\">window.parent.CKEDITOR.tools.callFunction(2,\"\", \"\");</script>");
                }
            }
            else
            {
                int rs = CMSNewsRepository.Current.SaveAttach(postedFile, savepath, userName, iNewsID);
                if (rs == 0)
                {
                    context.Response.StatusCode = 400;
                }
                else context.Response.StatusCode = 200;

                context.Response.Write("ok");
            }
        }
        catch (Exception ex)
        {
            throw;
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
