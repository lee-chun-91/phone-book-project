import AddPhoneNumber from "@/components/organisms/AddPhoneNumber.vue";
import VueRouter from "vue-router";
import PhoneNumberListComponent from "@/components/organisms/PhoneNumberListComponent.vue";
import UpdatePhoneNumber from "@/components/organisms/UpdatePhoneNumber.vue";

const routes = [
  {
    path: "/",
    name: "PhoneNumberList",
    component: PhoneNumberListComponent,
  },
  {
    path: "/add",
    name: "AddPhoneNumber",
    component: AddPhoneNumber,
  },

  {
    path: "/update/:id",
    name: "UpdatePhoneNumber",
    component: UpdatePhoneNumber,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
