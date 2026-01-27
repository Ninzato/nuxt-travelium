import { createAuthClient } from "better-auth/vue";

const authClient = createAuthClient();

// export const useAuthStore = defineStore("useAuthStore", {
//   state: () => ({
//     loading: false,
//   }),
//   actions: {
//     async signIn() {
//       this.loading = true;
//       await authClient.signIn.social({
//         provider: "github",
//         callbackURL: "/dashboard",
//       });
//       this.loading = false;
//     },
//   },
// });

export const useAuthStore = defineStore("useAuthStore", () => {
  const session = authClient.useSession();
  const user = computed(() => session.value.data?.user);
  const loading = computed(() => session.value.isPending || session.value.isRefetching);

  async function signIn() {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/dashboard",
      errorCallbackURL: "/error",
    });
  }

  async function signOut() {
    await authClient.signOut();
    navigateTo("/");
  }

  return {
    // state
    loading,

    // function
    signIn,
    signOut,

    // object
    user,
  };
});
