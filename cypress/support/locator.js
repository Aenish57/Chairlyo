export const loginlocator = {
    email: '[name="email"]',
    password: '[name="password"]',
    login: "//button[@type='submit']",
};

export const dashboardlocator = {
    AddBranch: '//div[contains(@class,"lg:flex gap-2")]//button[normalize-space()="Add Branch"]',
    BranchMenu: "/html[1]/body[1]/div[1]/div[1]/div[1]/aside[1]/div[2]/div[1]/nav[1]/div[1]/a[1]/span[1]/*[name()='svg'][1] ",
    SiderBarMenu: "/html[1]/body[1]/div[1]/div[1]/div[1]/aside[1]/div[1]/div[2]/button[2]/span[1]/*[name()='svg'][1]",
    LogoutButton: '//button[normalize-space()="Logout"]',
    profile: "#radix-_r_45_ > aside > div.py-1.border.rounded-xl.border-neutral-200.overflow-hidden.hover\:bg-neutral-100.cursor-pointer.transition-\[background\].shrink-0 > div",
};

export const search={
    SearchField: '//input[@placeholder="Search..."]',
}; 

export const forgetpassword = {
  forgetpassword: "//a[normalize-space()='Forgot Password?']",
  email: '[name="email"]',
  button: "//button[@type='submit']",
};
export const branchlocator = {
  AddBranch: '//*[@id="root"]/div/div[2]/main/div/div[1]/div[1]/div[2]/button',
  BranchName: "#name",
  Slug: "#slug",
  BranchPhone: '[name="phone"]',
  BranchEmail: "#email",
  Status: "/html/body/div[1]/div/div[2]/main/div/div[2]/div/form/div/div/div/div[5]/button",
  Address: "#address",
  TimeZone: "//span[@class='flex-1 truncate text-neutral-700']",
  FirstName: "#admin_first_name",
  LastName: "#admin_last_name",
  AdminEmail: "#admin_email ",
  Password: '[name="admin_password"]',
  AdminPhone: "[name='phone'] ",
  CreateBranch: "//button[normalize-space()='Save Changes']",
  EditBranch: "//tbody/tr[2]//*[name()='svg']//*[name()='path' and contains(@d,'M12 3H5a2 ')]",
  UpdateBranch: "//button[normalize-space()='Save Changes']",
  DeleteBranch: "//*[name()='path' and contains(@d,'M10 11v6')]",
  ConfirmDelete: "/html[1]/body[1]/div[3]/div[3]/input[1]",
  Delete: "Delete Branch",
};