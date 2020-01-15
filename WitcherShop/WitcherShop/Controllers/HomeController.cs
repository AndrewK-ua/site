using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WitcherShop.Models;

namespace WitcherShop.Controllers
{
    public class HomeController : Controller
    {
        private BookPurchaseContext db;
        public HomeController(BookPurchaseContext context)
        {
            db = context;
        }

        public async Task<IActionResult> Index()
        {
            var optionsBuilder = new DbContextOptionsBuilder<BookPurchaseContext>();
            var options = optionsBuilder.UseSqlServer(@"Server=(localdb)\mssqllocaldb;Database=WitcherShop;Trusted_Connection=True;")
                .Options;
            BookPurchaseContext context = new BookPurchaseContext(options);
            Book book = context.books.Where(b => b.id == 8).FirstOrDefault();
            context.books.Remove(book);
            context.SaveChanges();
            return View(await db.books.ToListAsync());
        }

        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Create(Book book)
        {
            db.books.Add(book);
            await db.SaveChangesAsync();
            return RedirectToAction("Index");
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
