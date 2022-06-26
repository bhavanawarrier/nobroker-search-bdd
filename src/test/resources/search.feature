Feature: Check the description of a property in the nobroker application

  Scenario Outline: Search property to buy on nobroker and verify description exists
    When Buyer opens the nobroker application "https://www.nobroker.in/"
      And Buyer clicks on Buy option
      And Buyer selects the City "<city>"
      And Buyer enters keyword to search the localities "<keyword>"
    Then Search Results are displayed with at least <locality_search_count> results
      When Buyer selects locality "<locality1>"
    Then Locality "<locality1>" is selected in the search box
      When Buyer enters keyword to search the localities "<keyword>"
    Then Search Results are displayed with at least <locality_search_count> results
      When Buyer selects locality "<locality2>"
    Then Locality "<locality2>" is selected in the search box
      When Buyer selects apartment types "<types>"
      And Buyer clicks on Search button
    Then Property Listing page is opened with at least <result_count> result
    When Buyer clicks on <property_index>th property on the page
    Then Property page opens with description


    Examples:
      | city | keyword |  locality1 |   locality2 |  types | result_count | locality_search_count | property_index |
      | Mumbai | Malad | Malad East, Malkani Estate, Pushpa Park, Malad East, Mumbai, Maharashtra | Malad west, Sundar Ln, Kanchpada, Malad West, Mumbai, Maharashtra, India | 2 BHK,3 BHK | 1 | 1 | 4 |
      | Bangalore | Koramangala | Koramangala 6th Block, Koramangala, Bengaluru, Karnataka, India | Koramangala 1st Block, HSR Layout 5th Sector, Bengaluru, Karnataka, India | 1 RK,4+ BHK | 1 | 1 | 10 |
      | nosuchcity | na | na | na | 1 RK,4+ BHK | 1 | 1 | 10 |
      | Chennai | nosuchlocality | na | na | 1 RK,4+ BHK | 1 | 1 | 10 |
      | Bangalore | Koramangala | Koramangala 6th Block, Koramangala, Bengaluru, Karnataka, India | Koramangala 1st Block, HSR Layout 5th Sector, Bengaluru, Karnataka, India | 1 RK,100 BHK | 1 | 1 | 10 |