using Microsoft.AspNetCore.Mvc;
using Pet_project.Models;
using System.Threading.Tasks;

namespace Pet_project.Controllers
{
    public class HomeController : Controller
    {
        public async Task<ActionResult> Index() 
        {
            HomeModel model = new HomeModel()
            {
                Number = 5
            };

            return View(model);
        }
    }
}
