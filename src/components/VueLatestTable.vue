<script setup>
import { watchEffect,computed,ref, watch} from "vue";

const props = defineProps({
  headers: {
    type: Array,
    required: true,
  },
  data: {
    type: Array,
    required: true,
  },
  isSearchable: Boolean,
  searchPlaceholder: String,
  raceFilterBox: String,
  footer: { type: Object, default: {} },
  defaultTheme: Boolean,
  noData: {
    type: String,
    default: "No data found",
  },
  rowsPerPageText: { type: String, default: "Rows per page" },
});

const STRINGS = {
  allText: "All",
};
const defaultRowsPerPage = [10, 25, 50, -1];
const raceData = [
  { text: "Any", value: "Any" },
  { text: "NE", value: "NE-icon" },
  { text: "HU", value: "HU-icon" },
  { text: "UD", value: "UD-icon" },
  { text: "OC", value: "OC-icon" },
  { text: "RDM", value: "RDM-icon" },
];

const tempData = ref([]);
const currentPage = ref(1);

const showingRange = computed(() => {
  const start = rowsPerPage.value * (currentPage.value - 1) + 1;
  let end = currentPage.value * rowsPerPage.value;

  if (end > showingTotalRecords.value || end < 0) {
    end = showingTotalRecords.value;
  }

  return { start, end };
});

const showingTotalRecords = ref(0);
const searchBox = ref('');
const raceFilterBox = ref(raceData[0].value);

const footer = props.footer || {}; // it will be an empty object {} by default
let showedData = ref([]);
let rowsPerPage = ref(defaultRowsPerPage[0]);

const totalPages = computed(() => {
  return showingTotalRecords.value % rowsPerPage.value === 0
    ? showingTotalRecords.value / rowsPerPage.value
    : Math.trunc(showingTotalRecords.value / rowsPerPage.value) + 1;
});

const updateRowsPerPage = (
  pageSize = rowsPerPage.value,
  data = props.data,
  search = searchBox?.value,
  race = raceFilterBox?.value,
  
  fromSearch = false
) => {

  // by default, we assign the rowsPerPage to page if the page is empty
  let allSelected = false;

  if (!fromSearch && search) {
    data = findInValues(data, search);
  }

  if(fromSearch && !search && race != 'Any'){
    data = onRaceFilter(data, race);
  }

  tempData.value = data;
  showingTotalRecords.value = data.length;

  if (pageSize === -1) {
    pageSize = data.length;
    allSelected = true;
  }

  if (pageSize && !isNaN(parseInt(pageSize))) {
    // check the pageSize number is a number or not, if not, make the rowsPerPage first element of the footer.rowsPerPage
    rowsPerPage.value = pageSize;
  } else {
    rowsPerPage.value = footer.rowsPerPage[0];
  }

  showedData.value = data.slice(0, pageSize);
  
  if (allSelected) {
    rowsPerPage.value = -1; // we selected the all in the dropdown again
  }
};

const onRaceFilter = (arr, value) => {
  value = String(value).toLowerCase();
  if (value === "hu-icon") {
    return arr.filter((o) =>
      Object.entries(o).some((entry) => String(entry[1]) == "HU-icon")
    );
  }
  if (value === "ne-icon") {
    return arr.filter((o) =>
      Object.entries(o).some((entry) => String(entry[1]) == "NE-icon")
    );
  }
  if (value === "ud-icon") {
    return arr.filter((o) =>
      Object.entries(o).some((entry) => String(entry[1]) == "UD-icon")
    );
  }
  if (value === "oc-icon") {
    return arr.filter((o) =>
      Object.entries(o).some((entry) => String(entry[1]) == "OC-icon")
    );
  }
  if (value === "rdm-icon") {
    return arr.filter((o) =>
      Object.entries(o).some((entry) => String(entry[1]) == "RDM-icon")
    );
  }
  if (value === "any") {
    return arr
  }
};

const findInValues = (arr, value) => {
  value = String(value).toLowerCase();
  return arr.filter((o) =>
    Object.entries(o).some((entry) =>
      String(entry[1]).toLowerCase().includes(value)
    )
  );
};

watchEffect(()=>{
  updateRowsPerPage(-1);
})

watch(
  () => raceFilterBox.value,
  (newData, _oldData) => {
    const data = onRaceFilter(props.data, newData);
    updateRowsPerPage(rowsPerPage.value, data, null, newData, true);
  }
);

watch(
  () => searchBox.value,
  (newData, _oldData) => {
    const data = findInValues(props.data, newData);
    updateRowsPerPage(rowsPerPage.value, data, newData, true);
  }
);

const changePage = (page = currentPage.value) => {
  currentPage.value = page;

  const start = (page - 1) * rowsPerPage.value;
  const rows = isNaN(parseInt(rowsPerPage.value))
    ? 1
    : parseInt(rowsPerPage.value);

  showedData.value = tempData.value.slice(start, start + rows);
};
 
// onMounted(() => {
//   console.log('onBeforeMount')

//   if (!Array.isArray(footer.rowsPerPage)) {
//     footer.rowsPerPage = [];
//   } else {
//     footer.rowsPerPage = footer.rowsPerPage.map((p) => parseInt(p)); // we parse the pages here
//     footer.rowsPerPage = footer.rowsPerPage.filter((p) => !isNaN(p)); // if it is not a Number, we will remobe the page from the list
//   }

//   if (!footer?.rowsPerPage || footer.rowsPerPage.length === 0) {
//     footer['rowsPerPage'] = [10, 25, 50, -1];
//   }

//   rowsPerPage.value = footer.rowsPerPage[0];

//   updateRowsPerPage(rowsPerPage.value); // excute it initially

//   if (!footer?.allText) {
//     footer.allText = STRINGS.allText;
//   }
// });
</script>

<template>
  <div id="vueLatestTable" :class="defaultTheme ? 'defaultTheme' : ''">
    <div id="isSearchable">
      <select class="raceFilterBox" size="1" v-model="raceFilterBox">
        <option v-for="field in raceData" :key="field.id" :value="field.value">
          {{ field.text }}
        </option>
      </select>
      <input
        type="text"
        class="searchBox"
        :placeholder="searchPlaceholder ? searchPlaceholder : ''"
        v-model="searchBox"
      />
      <div id="lastUpdated">
        <div>Season I - Update:</div>
        <div>10/9/2023 4:06PM</div>
      </div>
    </div>

    <table aria-hidden="true">
      <thead>
        <tr>
          <th v-for="header in headers" :key="header.value">
            {{ header.text }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in showedData" :key="row.id">
          <td v-for="header in headers" :key="header.value">
            {{ row[header.value] }}
            <img
              src="../assets/OC.jpg"
              class="race"
              alt="Orc"
              v-if="row[header.value] == 'OC-icon' && header.text == 'Race'"
            />
            <img
              src="../assets/HU.jpg"
              class="race"
              alt="Human"
              v-if="row[header.value] == 'HU-icon' && header.text == 'Race'"
            />
            <img
              src="../assets/UD.jpg"
              class="race"
              alt="Undead"
              v-if="row[header.value] == 'UD-icon' && header.text == 'Race'"
            />
            <img
              src="../assets/NE.jpg"
              class="race"
              alt="NightElf"
              v-if="row[header.value] == 'NE-icon' && header.text == 'Race'"
            />
            <img
              src="../assets/RDM.jpg"
              class="race"
              alt="Random"
              v-if="row[header.value] == 'RDM-icon' && header.text == 'Race'"
            />
            <img
              src="../assets/arrow-up.png"
              class="arrow-up"
              v-if="parseInt(row[header.rankchange]) < 0"
            />
            <img
              src="../assets/arrow-down.png"
              class="arrow-down"
              v-if="parseInt(row[header.rankchange]) > 0"
            />
            <span class="no-change" v-if="parseInt(row[header.rankchange]) == 0">
            ---</span>
            <img
              src="../assets/Grandmaster.jpeg"
              id="top1"
              class="top3"
              v-if="row[header.value] == '1' && header.text == 'No'"
            />
            <img
              src="../assets/Master.jpeg"
              id="top2"
              class="top3"
              v-if="row[header.value] == '2' && header.text == 'No'"
            />
            <img
              src="../assets/Diamond.jpeg"
              id="top3"
              class="top3"
              v-if="row[header.value] == '3' && header.text == 'No'"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="showedData.length === 0" class="noData">{{ noData }}</div>
    <footer>
      <div>
        <template v-if="footer?.rowsPerPage">
          <span id="rows-per-page-text">{{ rowsPerPageText }}:</span>
          <select
            class="rowsPerPage"
            v-model="rowsPerPage"
            @change="updateRowsPerPage()"
          >
            <template
              v-for="(page, index) in footer.rowsPerPage"
              :key="page.id"
            >
              <option v-if="page === -1" value="-1">
                {{ footer.allText }}
              </option>
              <template v-else>
                <option v-if="data.length >= page" :selected="index === 0">
                  {{ page }}
                </option>
              </template>
            </template>
          </select>
        </template>
      </div>
      <div>
        <p>
          {{ showingRange.start }} - {{ showingRange.end }} of
          {{ showingTotalRecords }}
        </p>
        <p class="arrows">
          <label v-if="currentPage !== 1" @click="changePage(currentPage - 1)"
            >←</label
          >
          <label v-if="totalPages > 1">
            <select v-model="currentPage" @change="changePage()">
              <option v-for="page in totalPages" :key="page.id">
                {{ page }}
              </option>
            </select>
          </label>
          <label
            v-if="currentPage < totalPages"
            @click="changePage(currentPage + 1)"
            class="ml"
            >→</label
          >
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped lang="scss">
#vueLatestTable {
  font-family: Friz Quadrata;
  display: table;
  width: 70%;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.8);
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  #lastUpdated {
    display: inline-table;
    margin-left: auto;
    color: #f7aa06;
    font-size: 15px;
  }

  #isSearchable {
    display: flex;
    margin-bottom: 20px;
    .raceFilterBox {
      margin-right: 20px;
      padding: 10px 10px;
    }

    .searchBox {
      display: block;
      width: 150px;
      padding: 10px 10px;
    }
  }

  .top3 {
    align-items: center;
    width: 40px;
    height: 40px;
    margin-left: 10px;
  }

  table {
    width: 100%;
    border-spacing: 0;

    th {
      color: #f7aa06;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
    }

    thead tr th:nth-child(1) {
      text-align: left;
    }

    thead tr th:nth-child(2) {
      text-align: left;
    }

    tbody tr td:nth-child(1) {
      text-align: left;
    }

    tbody tr td:nth-child(2) {
      text-align: left;
    }

    tbody tr td:nth-child(3) {
      font-size: 0;
    }

    .race {
      width: 35px;
      height: 35px;
    }

    tbody tr td:nth-child(6) {
      color: green;
    }

    tbody tr td:nth-child(7) {
      color: red;
    }

    tbody tr:hover {
      box-shadow: 0 0 17px gray;
    }

    tbody tr:has(#top1):hover {
      background-color: #f7ab06e1;
      text-shadow: 1px 1px black;
    }

    tbody tr:has(#top2):hover {
      background-color: #0033fdbc;
      text-shadow: 1px 1px black;
    }

    tbody tr:has(#top3):hover {
      background-color: #79797bbc;
      text-shadow: 1px 1px black;
    }

    tr {
      td {
        border-top: thin solid hsla(0, 0%, 100%, 0.12);
        border-bottom: thin solid hsla(0, 0%, 100%, 0.12);
        color: #ebdec2;
        font-family: sans-serif;
        font-size: 15px;
        text-align: center;
        padding: 10px 10px;
      }
    }
  }

  footer {
    color: #f7aa06;
    font-size: 15px;
    justify-content: space-between;
    padding-left: 10px;
    margin-top: 20px;
    display: flex;

    & > div {
      flex-grow: 1;
      display: flex;
      justify-content: flex-start;

      span {
        margin-top: 8px;
      }
    }

    & > div:last-child {
      text-align: right;
      display: flex;
      justify-content: flex-end;
      margin-top: -10px;

      p:first-child {
        text-align: left !important;
      }

      p {
        text-align: right;
        margin-right: 10px;
      }

      .arrows {
        margin-top: 10px;

        .ml {
          margin-left: 10px;
        }
      }
    }

    select {
      padding: 5px 10px;
      margin-left: 10px;
    }
  }

  .noData {
    color: #f7aa06;
    text-align: center;
    margin: 20px 0;
  }
}

@media only screen and (min-width: 2000px) {
  #vueLatestTable {
    font-family: Friz Quadrata;
    display: table;
    width: 50%;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.9);
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
