<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <!-- 아바타 -->
    <template>
      <div>
        <p>Using stand-alone:</p>
        <p />
        <div class="mb-4">
          <b-avatar></b-avatar>
          <b-avatar variant="primary" text="BV"></b-avatar>
          <b-avatar variant="info" src="https://placekitten.com/300/300"></b-avatar>
          <b-avatar variant="success" icon="people-fill"></b-avatar>
        </div>
        <p>Using in components (list group) example:</p>
        <p />
        <b-list-group style="max-width: 300px">
          <b-list-group-item class="d-flex align-items-center">
            <b-avatar class="mr-3"></b-avatar>
            <span class="mr-auto">J. Circlehead</span>
            <b-badge>5</b-badge>
          </b-list-group-item>
          <b-list-group-item class="d-flex align-items-center">
            <b-avatar variant="primary" text="BV" class="mr-3"></b-avatar>
            <span class="mr-auto">BootstrapVue</span>
            <b-badge>12</b-badge>
          </b-list-group-item>
          <b-list-group-item class="d-flex align-items-center">
            <b-avatar variant="info" src="https://placekitten.com/300/300" class="mr-3"></b-avatar>
            <span class="mr-auto">Super Kitty</span>
            <b-badge>9</b-badge>
          </b-list-group-item>
          <b-list-group-item class="d-flex align-items-center">
            <b-avatar variant="success" icon="people-fill" class="mr-3"></b-avatar>
            <span class="mr-auto">ACME group</span>
            <b-badge>7</b-badge>
          </b-list-group-item>
        </b-list-group>
      </div>

      <!-- 배경화면 -->
    </template>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      message: "",
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped></style>
