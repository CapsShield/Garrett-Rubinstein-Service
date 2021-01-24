const allFilters = {
  reviewType: [
    {
      id: 'review-type-all',
      value: 'all',
      label: 'All',
      hideActive: true,
      dataFromProps: 'allReviews',
      default: true
    },
    {
      id: 'review-type-positive',
      value: 'positive',
      label: 'Positive',
      dataFromProps: 'positive'
    },
    {
      id: 'review-type-negative',
      value: 'negative',
      label: 'Negative',
      dataFromProps: ['allReviews', 'positive'],
      dataFunction: (all, pos) => (all - pos)
    }
  ],
  purchaseType: [
    {
      id: 'purchase-type-all',
      value: 'all',
      label: 'All',
      hideActive: true,
      default: true,
      dataFromProps: 'allReviews'
    },
    {
      id: 'purchase-type-vapor',
      value: 'vapor',
      label: 'Vapor Purchasers',
      tooltip: 'These are reviews written by customers that purchased the game directly from Vapor.',
      dataFromProps: 'vapor'
    },
    {
      id: 'purchase-type-other',
      value: 'other',
      label: 'Other',
      tooltip: 'These are reviews written by customers that did not purchase the game on Vapor. (This may include legitimate sources such as other digital stores, retail stores, testing purposes, or press review purposes. Or, from inappropriate sources such as copies given in exchange for reviews.)',
      activeLabel: 'Not purchased on Vapor',
      dataFromProps: ['allReviews', 'vapor'],
      dataFunction: (all, vapor) => (all - vapor)
    }
  ],
  language: [
    {
      id: 'language-all',
      value: 'all',
      label: 'All Languages',
      hideActive: true,
      dataFromProps: 'allReviews'
    },
    {
      id: 'language-user',
      value: 'user',
      label: 'Your Languages',
      tooltip: 'Your preferences are currently set to show content authored in these languages: English.\n\n Click \'customize\' below to modify your preferences.',
      default: true,
      dataFromProps: 'language'
    }
  ],
  dateRange: [
    {
      id: 'date-range-lifetime',
      value: 'lifetime',
      label: 'Lifetime',
      hideActive: true,
      default: true
    },
    {
      id: 'date-range-include',
      value: 'include',
      label: 'Only Specific Range (Select on graph above)',
      disabled: true
    },
    {
      id: 'date-range-exclude',
      value: 'exclude',
      label: 'Exclude Specific Range (Select on graph above)',
      disabled: true
    }
  ],
  playtime: [
    {
      id: 'playtime-no-min',
      value: 'no-min',
      label: 'No Minimum',
      hideActive: true,
      default: true
    },
    {
      id: 'playtime-over-1-hr',
      value: 'over-1-hr',
      label: 'Over 1 hour',
      activeLabel: 'Playtime: Over 1 hour'
    },
    {
      id: 'playtime-over-10-hrs',
      value: 'over-10-hrs',
      label: 'Over 10 hours',
      activeLabel: 'Playtime: Over 10 hours'
    },
    {
      id: 'playtime-range',
      value: 'range',
      activeLabel: 'Playtime: ',
      hideDropdown: true
    }
  ]
};

export default allFilters;