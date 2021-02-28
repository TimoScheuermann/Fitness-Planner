import Vue from 'vue';
import VueRouter, { Route } from 'vue-router';

Vue.use(VueRouter);
const prefix = 'FitnessHub | ';

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: 'history',

  routes: [
    /**
     * => Start Fullscreen
     */
    {
      path: '/training/search',
      name: 'search-exercise',
      component: () => import('@/views/training/SearchExercise.vue'),
      meta: {
        title: prefix + 'Search',
        fullscreen: true,
        fsFallback: 'training'
      }
    },
    {
      path: '/nutrition/search',
      name: 'search-recipe',
      component: () => import('@/views/nutrition/SearchRecipe.vue'),
      meta: {
        title: prefix + 'Search',
        fullscreen: true,
        fsFallback: 'nutrition'
      }
    },
    {
      path: '/training/exercise/:id',
      name: 'exercise-details',
      component: () => import('@/views/training/Exercise.vue'),
      meta: {
        title: prefix + 'Übung',
        fullscreen: true,
        fsFallback: 'training'
      }
    },
    {
      path: '/training/workout/:id',
      name: 'workout-details',
      component: () => import('@/views/training/Workout.vue'),
      meta: {
        title: prefix + 'Workout',
        fullscreen: true,
        fsFallback: 'training'
      }
    },
    {
      path: '/nutrition/recipe/:id',
      name: 'recipe-details',
      component: () => import('@/views/nutrition/Recipe.vue'),
      meta: {
        title: prefix + 'Rezept',
        fullscreen: true,
        fsFallback: 'nutrition'
      }
    },
    {
      path: '/nutrition/recipe/:id/update',
      name: 'update-recipe',
      component: () => import('@/views/profile/recipe/UpdateRecipe.vue'),
      meta: {
        title: prefix + 'Rezept anpassen',
        needsSignIn: true,
        fullscreen: true
      }
    },
    {
      path: '/training/exercise/:id/update',
      name: 'update-exercise',
      component: () => import('@/views/profile/exercise/UpdateExercise.vue'),
      meta: {
        title: prefix + 'Übung anpassen',
        needsSignIn: true,
        fullscreen: true,
        fsFallback: 'exercises'
      }
    },
    {
      path: '/profile/messages/:friendId',
      name: 'chatroom',
      component: () => import('@/views/profile/ChatRoom.vue'),
      meta: {
        title: prefix + 'ChatRoom',
        needsSignIn: true,
        fullscreen: true,
        fsFallback: 'messages'
      }
    },
    {
      path: '/profile/friends/add',
      name: 'add-friend',
      component: () => import('@/views/profile/AddFriend.vue'),
      meta: {
        title: prefix + 'Freund hinzufügen',
        needsSignIn: true,
        fullscreen: true,
        fsFallback: 'friends'
      }
    },

    {
      path: '/profile/management/submissions/:id',
      name: 'exercise-submission',
      component: () =>
        import('@/views/profile/management/ExerciseSubmission.vue'),
      meta: {
        needsSignIn: true,
        groups: ['Admin', 'Moderator'],
        fullscreen: true,
        fsFallback: 'exercise-submissions'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/Login.vue'),
      meta: {
        title: prefix + 'Login',
        fullscreen: true,
        fsFallback: 'home'
      }
    },
    /**
     * <= Ende Fullscreen
     */
    {
      path: '/community',
      component: () => import('@/views-interim/Community-Interim.vue'),
      children: [
        {
          path: '',
          name: 'community',
          component: () => import('@/views/community/Community.vue'),
          meta: {
            title: prefix + 'Community'
          }
        },
        { path: '*', redirect: { name: 'community' } }
      ]
    },
    {
      path: '/profile',
      component: () => import('@/views-interim/Profile-Interim.vue'),
      children: [
        {
          path: '',
          name: 'profile',
          component: () => import('@/views/profile/Profile.vue'),
          meta: {
            title: prefix + 'Profil',
            needsSignIn: true,
            hero: 'Profil'
          }
        },
        {
          path: 'settings',
          name: 'settings',
          component: () => import('@/views/profile/Settings.vue'),
          meta: {
            title: prefix + 'Einstellungen',
            needsSignIn: true,
            hero: 'Einstellungen'
          }
        },
        {
          path: 'messages',
          name: 'messages',
          component: () => import('@/views/profile/Messages.vue'),
          meta: {
            title: prefix + 'Nachrichten',
            needsSignIn: true,
            hero: 'Nachrichten'
          }
        },
        {
          path: 'friends',
          name: 'friends',
          component: () => import('@/views/profile/Friends.vue'),
          meta: {
            title: prefix + 'Freunde',
            needsSignIn: true,
            hero: 'Freunde'
          }
        },
        {
          path: 'statistics',
          name: 'statistics',
          component: () => import('@/views/profile/Trainingstatistics.vue'),
          meta: {
            title: prefix + 'Trainingsstatistik',
            needsSignIn: true,
            hero: 'Trainingsstatistik'
          }
        },
        {
          path: 'recipes',
          name: 'recipes',
          component: () => import('@/views/profile/Recipes.vue'),
          meta: {
            title: prefix + 'Rezepte',
            needsSignIn: true,
            hero: 'Rezepte'
          }
        },
        {
          path: 'recipes/submit',
          name: 'submit-recipe',
          component: () => import('@/views/profile/recipe/SubmitRecipe.vue'),
          meta: {
            title: prefix + 'Rezept erstellen',
            needsSignIn: true,
            hero: 'Erstellen',
            backTitle: 'Rezepte',
            backRoute: 'recipes'
          }
        },
        {
          path: 'exercises',
          name: 'exercises',
          component: () => import('@/views/profile/Exercises.vue'),
          meta: {
            title: prefix + 'Übungen',
            needsSignIn: true,
            hero: 'Übungen'
          }
        },
        {
          path: 'exercises/submit',
          name: 'submit-exercise',
          component: () =>
            import('@/views/profile/exercise/SubmitExercise.vue'),
          meta: {
            title: prefix + 'Übung erstellen',
            needsSignIn: true,
            hero: 'Erstellen',
            backTitle: 'Übungen',
            backRoute: 'home'
          }
        },

        {
          path: 'management/submissions',
          name: 'exercise-submissions',
          component: () =>
            import('@/views/profile/management/ExerciseSubmissions.vue'),
          meta: {
            title: prefix + 'Eingereichte Übungen',
            needsSignIn: true,
            groups: ['Admin', 'Moderator'],
            hero: 'Eingereichte Übungen'
          }
        },
        { path: '*', redirect: { name: 'profile' } }
      ]
    },
    {
      path: '/training',
      component: () => import('@/views-interim/Training-Interim.vue'),
      children: [
        {
          path: '',
          name: 'training',
          component: () => import('@/views/training/Training.vue'),
          meta: {
            title: prefix + 'Training',
            hero: 'Training'
          }
        },
        {
          path: 'guide',
          name: 'muscle-guide',
          component: () => import('@/views/training/Guide.vue'),
          meta: {
            title: prefix + 'Muskelguide',
            hero: 'Muskelguide'
          }
        },
        {
          path: 'muscle/:muscle',
          name: 'muscle-exercises',
          component: () => import('@/views/training/Muscle.vue'),
          meta: {
            title: prefix + 'Muskel',
            hero: 'Muskel'
          }
        },
        { path: '*', redirect: { name: 'training' } }
      ]
    },
    {
      path: '/nutrition',
      component: () => import('@/views-interim/Nutrition-Interim.vue'),
      children: [
        {
          path: '',
          name: 'nutrition',
          component: () => import('@/views/nutrition/Nutrition.vue'),
          meta: {
            title: prefix + 'Nutrition',
            hero: 'Rezepte'
          }
        },
        {
          path: 'tipps',
          name: 'nutrition-tipps',
          component: () => import('@/views/nutrition/Tipps.vue'),
          meta: {
            title: prefix + 'Ernährungstipps',
            hero: 'Ernährungstipps'
          }
        },
        {
          path: 'category/:category',
          name: 'recipe-category',
          component: () => import('@/views/nutrition/Category.vue'),
          meta: {
            title: prefix + 'Kategorie',
            hero: 'Kategorie'
          }
        },
        {
          path: 'search-results',
          name: 'recipe-search-results',
          component: () => import('@/views/nutrition/SearchResults.vue'),
          meta: {
            title: prefix + 'Rezept Suche',
            hero: 'Rezept Suche'
          }
        },
        { path: '*', redirect: { name: 'nutrition' } }
      ]
    },
    {
      path: '/',
      component: () => import('@/views-interim/Home-Interim.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/home/Home.vue'),
          meta: {
            title: prefix + 'Home',
            hero: 'FitnessHub'
          }
        },
        { path: '*', redirect: { name: 'home' } }
      ]
    },
    { path: '*', redirect: { name: 'home' } }
  ]
});

export default router;

export function getTitle(route: Route = router.currentRoute): string {
  const name: string = route.meta.title;
  if (!name) prefix;
  return name;
}