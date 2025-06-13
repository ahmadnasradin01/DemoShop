const productsData = [
    {
      id: 1,
      name: {
        en: 'Cozy Knit Sweater',
        ku: 'بلوسێکی گەرمی സുഖ',
      },
      price: 79.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6thmNj7n83YXJiIKAEfvLZ1ab5eZFbImkBk2xvOhEZkU0Ts6_Ariup2k842lWZsZnEJEgNmMaFP1qs4sdQhTLt8iEqhWT-oxdASf7AaSvn23sicTyoj1zz2_l7JzfTlkMAhBjdZf8rKhbkx1_YQeGaUzXX2HgMKfI8C6PF98N9DteYxZfNUz-AVWU_Y8vd3woAiz49n9Oy4dejminmcvQ0_sa4GsD1bGOMMduCTD4-LAuVEGFdvwx3ysox5kqdekoui3g3XH0eerh',
      category: 'clothes',
    },
    {
      id: 2,
      name: {
        en: 'Classic Denim Jeans',
        ku: 'پانتۆڵی جینزی کلاسیک',
      },
      price: 59.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBy4RtjEI6s8WutAf1KWO4cAWaTV0vH7FwAkf-1T49cMxrDgbOTS0XN2pcuxOm5jhiEhbS5BnF0XSoPAZTS-WJslkNBnHS0jidkbQi2w8O9PshKtWmIdDGe-LYO6zsuYeLpdwMld_qAVCQACP_E7hqP5ReOIi7p-KdMhY97ZVsZxv4MlffT1JdrKYVyN_ukfvjVW48xVpSbu06KJpW1a2HdJ4e-j0XBktv5Ozjd4_sOypaE1Y5IT8e0q4QPTlM1R87HUtIDDJJ68He1',
      category: 'clothes',
    },
    {
      id: 3,
      name: {
        en: 'Leather Ankle Boots',
        ku: 'بۆتی پێستی پاژنە',
      },
      price: 129.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiKoDk-5Z_RxgqLPRCwoy3MwyYersGV-P4e7wWjLFrUwHiAe_YOV_l90HteLXqVskjKXclPRJkfatBK67PEBZ2IfyjqdYH_zzhbKc0AVNDM0ikGInnGRo7t9TVR-x7WOS4I5WF3rC9GNgfyBwf9hRygccpbArZM9suK8VguoljEOxlbMA1Wxt-P1IKVndS8WEqoxtPY-HEbXwRSZz8fo-dBVYG5wGtccdz9YdpmEeYC15J6VjVLjtWeGW21dqPQlvUKhpnVns4b0LK',
      category: 'shoes',
    },
    {
      id: 4,
      name: {
        en: 'Cotton T-Shirt',
        ku: 'تیشێرتی لۆکە',
      },
      price: 29.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_4TzWs_NDdPg5VwXJFqaRQ_LEcXeu35AFxS4oJTbn-4ur4YQevPVS4G4zWdqqL5xeXf9scCrkhptF7cQar8dacq_RqTEGsY0AvmI8C-CMtbF9xsByPnrfWrl2yojFym4Q-NuYh3bnyNfiX61MFupcIHQbH3ysFLXyXasXogy2LQhNMjuhiUSLf32Iy_HcUnKZolnG3zlocK9BSC8C1VvQnhtaohnA_gG1uD1TEOjKn3qyXE6_Fumb9eknjQGHjg3KhVCg1GodQhsd',
      category: 'clothes',
    },
    {
      id: 5,
      name: {
        en: 'Wool Blend Scarf',
        ku: 'شەاڵی تێکەڵاوی خوری',
      },
      price: 49.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTaNqGVVjpQaTugkM3-V5F656BDNu3X9iJj8kcsBhX0qncss7OSEn2b81il9j4R2_oqMOsFkIbrsGTOltBC3N-2uSAC2RKKCGMYr08rXD9St2P3TbWBKiKQ-Jl3sVvkKuZqGZqlgClyWddz3-_JDZkdS2_O2sX3oKiBuqgADAseLr5fqAlPOLJd2JH1WgstxEdwuM9TnQ9Gba2tHWTgbIRjwdUBYZ5oFf5Tg0Z-yZEAWu4KFjRa05UsECUl9OQFPUqshm95WhibsxS',
      category: 'accessories',
    },
    {
      id: 6,
      name: {
        en: 'Canvas Tote Bag',
        ku: 'جانتای شان',
      },
      price: 39.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYaAHfOVJlmQEocFxS20DXV0v7P94s7ktydl7cGKDjZGhkyvVGqXqw_fhDvSymbr_bn2ajxNeihmTsk1dLpsklKp0XLzIN2OHpQECn5wuHDisfyOCqGhsORpcY38u6SYuyhmVNL5VNpUWD9b_9jNLcEhll5hKrEYp5aPsQ9PxiuoW2iASBWfDwkqqKrv-ITkmQUEIeRR_pwywqRSim_hJoF6BVsPtHQqs3fHQUvd31ydm7RfRx5bcj7bU43_UM3gIVjri3ttd2-5-5',
      category: 'bags',
    },
    {
      id: 7,
      name: {
        en: 'Suede Loafers',
        ku: 'لۆفەری زمش',
      },
      price: 89.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRft8pepBLcX-Mb9b9kJOqfr6SmL1isblQTATQzxRqF3XyDnECCvCHHvgXpb32FLLYRGhv8gvf4tHgsQ3Eu1qZLPs5L6nQKdzYS9yMGNwrKhjfpnGyFo7kat0PUiXh9nIsBP6kN15UZBhhwxAaNFsU6NSrLU91c_7SfCHXG-JjP2uXHsvt1TDbI5Sy3YbZVNmFnQ-jfqs_7Z9_S7_mNn8XkYea746kpNZewOYNCWdOhDlHc6yO8Ptx9bYDyWJqB_FYRZNIG0K3YGSa',
      category: 'shoes',
    },
    {
      id: 8,
      name: {
        en: 'Silk Blouse',
        ku: 'بلوسی ئاوریشم',
      },
      price: 69.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALZLUafVYVnqQqx79ipBxWjGExPrx6F5u_Pcb7QyNCFpwabZ90EAd3sknVDZII0C7fh-2UCQN_oWR1PyScO00SPEDUasPIZrO0A8vv-9g97id0UwErHEW4lMeWVF1xRw-GtC3IevXvJjs56fbqihnxNDUDH-SG8QNIY6cYCdNG6yIzjnldcTRjEim3VI1a5sx2GBc39nP93b4iUIg4yX-NxZ5bnlMuUn4yAecQtTIFZFCxQARShFhJWnej46QeQffxech1oNeF4cB-',
      category: 'clothes',
    },
    {
      id: 9,
      name: {
        en: 'Winter Parka',
        ku: 'پاڕکای زستانە',
      },
      price: 149.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDlFpf0OONzRLh3RNDxUtNVRjIOP1jNRoF3AfcUrc-znMrZrroH4yvmPyEQiQtEoFmoZVsXwkja8MbzML_SnAW5FfEtUTacpFH_0EsDLpoy0gBNx8K8KOaNGlbPxUkfSpUHhG1Er29Q6PbJNaAvCa1BtibFdP82NIjzk23dk58TtuJ6I63huYF0k0qLL39ngJ1HGCxSriw-xY7JMkLAD8SOQpTaTaj5WeR0JnIS_vRWeRZ2CSZQCapQxNWgy6CgkoY8dvbPTi4KUCY',
      category: 'clothes',
    },
    {
      id: 10,
      name: {
        en: 'Running Shoes',
        ku: 'پێڵاوی ڕاکردن',
      },
      price: 99.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9k6bOA6Z0PecJBObv9DsNpn0ul7R3adDsnXBB1_vep-PwHyMfKQNzI2YotZ9uB3jLuG6gyE3IfPZix4T7q0ZgRSEFuAgJQdQAw0DLEy-rdGSE_8tVfGuKbOBQq9KZpHzokN5YSdwZwfRx1B1ZBst7zpGXGu4cNx_qZvcgThfQh6FOF6rC9OhKw-JwalMHMaOXpVDUnFVls0QR44cMD_SKKInLrRwn9c51XtL0Xkn5ILl4eWxZlHGSGx9LTcRlaL8rozzq3wXB24Bv',
      category: 'shoes',
    },
    {
      id: 11,
      name: {
        en: 'Leather Belt',
        ku: 'قایشی پێست',
      },
      price: 39.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAe8hxtmYimCYfGfR_3U6r7_cnKC8O1kVp4v6SHePP5GIUEipSAARxL5k-erler5QDQQXf4_YOwdanrrRkJhNit4wRmBlo2XFeVeYSMjiJOSV78bcELITanqwZvHyU8wxDKoq57JfzoPMvmRfIPyoboQIzX4XGoT5tXMACQvOskEm0AMBUo0ZDpmyRzqK1KrxCOHveCHZo1AApaLYqsegqGMLOzW7810yKGCNrOuA4eIBiaCk2eNWCrxciLRVOUPCsoaUyhv3JSUgSM',
      category: 'accessories',
    },
    {
      id: 12,
      name: {
        en: 'Crossbody Bag',
        ku: 'جانتای شان',
      },
      price: 79.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIdi6BFLzc7if7NYXUJh_y38Qv_8wMaOF5gadrupFzkCnudfqhzH_8NXi_NHVwSzkzkumUirE5XjYBkviqWqvcw95A1MBvtBOnZU8H84OROA_bhT7rbU7fFn7BjZDEPzUm_aAaC06_ycPehOyVXBaz-9_liDtTMezB6O28RncYeaSQmzZeCF-Ai0lIUH6J-U4reMd_XBcy7PE6UAX2yBQeNirb7wjAQYOyWaipTmxY5gxFIaVUPK9QyxuE9bcXALZ77fH-W4j12i-R',
      category: 'bags',
    },
    {
      id: 13,
      name: {
        en: 'Cashmere Sweater',
        ku: 'بلوسی کاشمیر',
      },
      price: 119.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCf6KO0L8w9kjY-frydvwx67ASE2iVRJ_XJtThI0d1hXOWPqPIE_wdFgWoRBWX2qSRq4_Yb8kiNtKBxLQNeNgjkDpt0BRe-SAVw-0a-gUwtWLSO5Dns2SVyeyWIrubXdxdP0i6A6EI9onBxZygbAvCk-WUV-O4fgbMRAbx9Ug9EeYNPGBrBenb9yXd2DRAfWK4GtKGuL88KcyPiUjU9Mofzz3iLILRaF2ckAPaSo-hpoBJxTuTLMUwwDzzQEU82MumBi7scNeGOVUqO',
      category: 'clothes',
    },
    {
      id: 14,
      name: {
        en: 'Slim Fit Trousers',
        ku: 'پانتۆڵی تەسک',
      },
      price: 69.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0I2FnICWQTa0HV1-YscFGTA_DaEsfKKSlpfu3hROKt8hpAY5M8nHCWWBY-nKLWgwzHA7qskF722ooaks1Tnd_rnu2X-W-505OC4v7vSsRu6K7S2-Qjfz1BuHMToCBQskg_rWTOaoilk_384J0adyOPST-MvmH3pZwGu3IQelcu7QC1Lykk2GfG7p6POQ0dlDZ_nXsHtekj9v6PrSQ507jXCBIqlNmLh_j6fPzsudsVaBvSgJ8ayAfAMDbU8ifgalAU8bI9BD3a7l7',
      category: 'clothes',
    },
    {
      id: 15,
      name: {
        en: 'Chelsea Boots',
        ku: 'بۆتی چێڵسی',
      },
      price: 109.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoa1IX6ZmYkSDq2kMcuZXjzYdAS9BmqEasB536PAuSLSOfcZHvKSiLiTCB2mbG8hpSYTUvlDz4SnoPpCcl0DIb-9aE0F6HJDgZtm0EUYuzJaYRdsHHDNpg0Dcngt2JzDY8x7LGkSB6Xq_aLPW-i_62NGZbRTuTK5Wco9wbNOda7-wUb0daxmyk-8Qfvw92ru4Agqdbi_TivDwbMXoz0B_bzFLh0BZ_QdilBzCN-De2gfgEoa3PstqVk-nrAAA25jdLoGEA_hw5KuEX',
      category: 'shoes',
    },
    {
      id: 16,
      name: {
        en: 'Graphic Tee',
        ku: 'تیشێرتی گرافیک',
      },
      price: 34.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAn6A1WW2Fw11vLJDXrtRuAQ-8gCHGJum7Q9qnoreWEjpry4QLdzpwlfiVcMBYLhwdQVODs4ZMHL9VYs0SIGkYRSzE6Y0neDsHJ64meCV8qXddE8jAz9dyg8yzGulec_URhJ3eFC_hC-TZSPLol_aLZOBt58VnL1dFDXoTc13CmFNc17jcNAnihsGXKRltPmmtcpIK9JDLI1aeAq0JpS1new9HIgZ_3jCxfY4ugEci_81pPmEtyFluB-qgVyDRq7eKTM3c5U-i3pmh',
      category: 'clothes',
    },
    {
      id: 17,
      name: {
        en: 'Striped Long Sleeve Shirt',
        ku: 'قەمیسی درێژی هێڵدار',
      },
      price: 54.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtX-yvWPTCgr3qgo3lF3U9DDeEWyc793j8MOx0Zb9rubrOWdzDHjb179kMyl1m-Rd42flWwh0_0N3Xp1YZ3LYCBcqu6RDRrugrrbwyNH8e1t77zwQyRzJqmotZA4A20ig-Py63eGyXOtrzq8F0SJHsUf-qaSiMZUS5iy4fcdqTlS-I7U2e8AbXPXgzBpxsdqWtFRvi_KIN6kmCpLnGYFMCsReK1NnWF2oUZRgSuKa--JcNse5SsSjPHGPTnkdgwKzvPvTh2ROSZ0w4',
      category: 'clothes',
    },
    {
      id: 18,
      name: {
        en: 'Chino Pants',
        ku: 'پانتۆڵی چینۆ',
      },
      price: 64.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDv_7Eyrx07Mn8nwtUmHZwtPr73agaxMC_eAgbVEWJsCFjVem1_MDOo3Iyn01_fnJt5IwNGKTuIazTWcTjfnPOpA5GGt46qipogYO04wdR0P9NpS6vwMu5efH-sW4xTj_5s1UYYemEpiNZcbEcVr2yYLwxmN6sDCX3dSH5ZBSzHRsv-32i52Sg4zSl9o2DmdH_nYhgFu4J6q09bjuLIFYHQrM82AaEdL3unvAz_bINddApe-9aSZJY4Z6L6tacJPpQ91QcQGrIu33RM',
      category: 'clothes',
    },
    {
      id: 19,
      name: {
        en: 'Sandal Heels',
        ku: 'سەندەڵی پاژنەدار',
      },
      price: 74.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4Fz5e_3zfZWuONdqelsM5jkYGk_XH0cxSxLYUQ6_pPGOv3IOrN-x5V861Df6PpYpXIjQRqNhhYatklB55h5ThYaerCYwVggcv-jX619dbZfW0T2f3d8BOt65alOgQrfWw00-tWmhySd36N7JlGfLCVlW-0iH1meXQ29tpf-1QL6CllWQfQEk7UloojRZdh-zUqH-i8a7NcQPEUwRSzmr9q3mfd1EAf9t7xmbh3mHDb7ZnibbUso2XK7AMwWT0tclJkrqRXG51r1yW',
      category: 'shoes',
    },
    {
      id: 20,
      name: {
        en: 'Bucket Hat',
        ku: 'کڵاوی سەتڵ',
      },
      price: 24.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRsXAWd8NY1K2z-KCYz8HWlFOEO8kTulguEAisr_NdJNJYc3wgmhc6BuFmBNYUd4L9PdylmwLkSt8Sky87NxMDtq8dqN-Pe9vQBgcy_fRLCMboAyZFcJI9e2BaYHfI3NqWV-oLqkIhpnLJUXUSicQRRDsc-imOXOLsN31qV7gl-ZWEicwUvEKDe1AT6W3u8PIlgbimsAMwhVHznqy49Cdi24lnnA6Xo9vp_x85TJs6YW2dnY1B3IzlzekHwfO9_bS2PzUP73ktXUcM',
      category: 'accessories',
    },
    {
      id: 21,
      name: {
        en: 'Trench Coat',
        ku: 'پاڵتۆی ترێنچ',
      },
      price: 139.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRaV1d2MPwJyZeHsT2jPqWkk4lix33WIRpy787IRRgjaDmzYWZYjJ2yyP2EZiyisfpXuqI6pOroAuz48M0Znw7NxaunebjCk4WFmJPOfdygRF2qwgasd7ax_elNFk-K5PrVFEvMYQ_o4oP2gb3SpmiFYrMngvTydcW153qed3s_XGKJ1KK_uc_b0P7N-HzC-Gcwbrlp9ih-YJ32fITGvMOvs4ikoubIFhgyP9u_Aus1lOSFFLO3JjZsuOh4MdKHl-JdyeG4687txeu',
      category: 'clothes',
    },
    {
      id: 22,
      name: {
        en: 'Hiking Boots',
        ku: 'بۆتی شاخەوانی',
      },
      price: 119.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDd72kjql8aSBg6ihA91JksP7lOb5oyuWw9yQ_C6S88wByRfW_HKtWHJfeBPLB7L4fnWZqrg4-5kLsbZjE1IC1d2lu9AsKb69dkU3sJd0ikbFVxZYYEPs8-zu5AHSkXu13wJqeTlA_65GachrFD30HaoAqVv1kYe85lbnt88jhYa25CPzRF4KVbgTjM3szDRtoYJZtJ0Rm1tzwN0ZpPt4uw8JnjaQKXm0dfM0PeMnts6lc9U0MYJQFJyGzyXW92hmc-pfD9uuA4jCY',
      category: 'shoes',
    },
    {
      id: 23,
      name: {
        en: 'Braided Leather Bracelet',
        ku: 'بەنەنگی پێستی تەونکراو',
      },
      price: 29.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfF2uHBuo5cZFUljTa6DU8S11YQVvdcJa0n4UwEy29bcW9htTbqp5tX4rnyL2fhmNvYRrhdyRm6FJgtf9i2mqStMbqiEOxhjUSdL-ez85BHB-wFk7Woi3iwa3IQ9a0ME1Upgvb65Y5wmsHijEJJbVo5ugNuSTJHlEovdupXchrVYY8KoxBQh3Iqpgk0xJu6sPfmiuDiW6qgTEFw7tiXt8FFCSqYjAh4eadhUfRjmYpfon4_5vf8eHhD006jh9RWNHGJFQhcOJ_rJRA',
      category: 'accessories',
    },
    {
      id: 24,
      name: {
        en: 'Satchel Bag',
        ku: 'جانتای ساتچڵ',
      },
      price: 89.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGwd3nkDFnsB1uIEA47kBrbT3Pe7DMvw9F6Zr_sQNK2bb3Q1FCXc08oZI3CiKucTMBhfXBBxtbSm1UM-D5Ur3eEOHcLNlAT5kUhGUwUHAUWkdF-vWfxg8UfOvX7wHBZbFM7P6dNqHTTrKFcQCjkpXLMWw1COIOsF0K9O_eDNacvyHETPXRpFNG-8HZYY5g-lp8vZNWIAzr3MxXoCVQ2WKqVC9c9QIMRhBjWZIqfEbxDCyP6uHwQgY8Ogpn8HVNXVtR1O6ZAVqUXWbj',
      category: 'bags',
    },
    {
      id: 25,
      name: {
        en: 'Merino Wool Cardigan',
        ku: 'کاردیگانی خوری مێرینۆ',
      },
      price: 99.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAonv3gFRHz4r5z6k5bCVj5ymIyNLXnVYMCJ8n85XKvqeKEIKd2U7Giytc5KR3L_okWWATOSb1vE2VITAPooqijQD3DPTeA3J5nt3ueqoPNOqgLcJg4zWNSAN2IWWPwgxrivynHe6IXxo4VV7w_9tmzsZCA5xRR7ADtyWZSd_DEA0bFjHRNmpV2uirCnvWZgq7VJRWlVxevJ_XsAAeUusYDL2FN8SyEjBCs8wJlr5EgB5vuTRB_NasLiC2sznLthrf9vseFj-q1Dv7v',
      category: 'clothes',
    },
    {
      id: 26,
      name: {
        en: 'Pleated Skirt',
        ku: 'تەنورەی چینی',
      },
      price: 59.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdm-laq-RcWmLNWuig1FGy2kuK90PfV9OtZPPjVNxH9a7RxYhPaYWFCxI5YHw-lqgpZCR_EEXXGSauVqdFxx7SFdjcXcCncoYVl855ssAFNCkQdQo_lPxa1ln7xsai_mz3lyzCJlFhrBoL1qdIsKkvSv27OcJcNAdSFl91d6NuNscJzkkOoSEE6dkv7psLoO1jAPbu7JdhSypVTmOExvrdmZnSvyMlhJvsTvm2WavxW4fZNe9QPL0RtlMAgbyMHe1WGLFNZsoninIt',
      category: 'clothes',
    },
    {
      id: 27,
      name: {
        en: 'Ankle Strap Pumps',
        ku: 'پەمپی قایشی پاژنە',
      },
      price: 84.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNltNitle9QriYACNW4OIvdLLbNQTNP_C0kbtb05he1az0VUvEi28EN1wthZlGYOYrUiObvZ8vT9R1pK3RYsas80KEG0oDgwsNL0bOTHZ_Yk_lUV1PWF3sy3kSuAqtWdHQFDcFfcCjTk0EP-26572x9KAAWV1Pfe1jPPuzSmhm-nC4YNwbKUyoQjrN3lugXrDgg2lPo74gZw2Uw5F04B92cFgAUVsd-caSLQs-HJxF2KYGJgE5jcvahEEYUEXaRKNjCJklJ6lNG8p2',
      category: 'shoes',
    },
    {
      id: 28,
      name: {
        en: 'Baseball Cap',
        ku: 'کڵاوی بیسبۆڵ',
      },
      price: 19.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCeqGYbbwtFHICnFUDaGqpsEHimVibyDrvwqGyGrPJ1OkkcloRyyd6MoDOJUhYWkajgIZsvTcU0tue2kE4pZiv6g3iKBnmjTF5YU0ByLYPp4N-1Eyssr7J4aCsurpqkhkqzHf87yWikLr_4P1QHL1fZqtPmqvLQIVsiK4JyXYWY8ppCB9yChgUOkt44RwHoF_J4GcaDxTz2UBTnbOYOJkApjhqFJCujZrK4bcgttoON8swdUFpXDcfokVCpx9_Tdix7FucEAncA3CS',
      category: 'accessories',
    },
    {
      id: 29,
      name: {
        en: 'Down Jacket',
        ku: 'چاکەتی پەڕ',
      },
      price: 159.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBdrerz6mbyeobKUdBJAQB0WWVprVWLUcoLya5VanMyNtBDLVElADx203at5H0zQgKwSByip_58EBoSgelt8fdqYAmvA2v-MJNbQgcsdoUpLYcX-RMY_Ba5WG0oCQcgLcKxHYyRC8LMGDPE8wm-pFasuU8wkMbP5x7RhzPjL6fdf7XcC1LlW9ZHkaMyqMrD0I6C47hHeHG-lziB9kCN0nxzHwJN9D4H8Town2vGjzSg58YwStnUVJuPQW91g7Lm3Mzyp1usH7xTEiw',
      category: 'clothes',
    },
    {
      id: 30,
      name: {
        en: 'Trail Running Shoes',
        ku: 'پێڵاوی ڕاکردنی شاخ',
      },
      price: 109.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtwnXeeEhYYlat3vIvvQ4oCMB_ES6Id40sPaFzqTzF4IT_dwirA6THt4C3xaUNl1cnsttesyl8DmSyKYsWWmjMzwwGEw9fo_vGYn01oqCUn2cXH-M4LfHokAITA1PcLHeAJ3v923hpP2Ago6h2s2BCns2VAmN4OIQXbZ2GSSTIYqSKUrINmnauXYNZ7V8XPHbq-KhmZB1kBEeanm6cn-_sBqUbjQoNa7jNWcJCh6Je5vvtlFRyF_f6JUsCFzHJNDCiZyv0HLg5XmPd',
      category: 'shoes',
    },
    {
      id: 31,
      name: {
        en: 'Woven Leather Cuff',
        ku: 'کەفی پێستی تەونکراو',
      },
      price: 34.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbdgTwFC5skHqiCLVTseP2kutiz2v7WRjEsRpovMDjrR6IeeZ4UASIQ1n_OUNo29_2Ph7-dG7S5uAB0atvorFvg_L0roaPne2bxkElkyl5gvYx_uWjCBCXqdeDIHxUkNqMfSnrNJm755NoKFqdxA8YcfacloS1EiEFebikL88sRpkqXyZRQQDF7kEcWRS5RmuBe4dQIITUjbZeu022032maOXdp3_09b37wo6WP73gwCO5z8lTE9m5gV6hjSXFysj6mQuYj4twH0mS',
      category: 'accessories',
    },
    {
      id: 32,
      name: {
        en: 'Hobo Bag',
        ku: 'جانتای هۆبۆ',
      },
      price: 79.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2fPu8A9IZPCYjZukzPjUft1DfMfqCHBZHbX5H9CAMH31_QLs5DAu9CZ9vQRRPB8UGNc-I_ds3nuO1CNf7sN7-olVdj-p2yAgAf5iH25006eUQ7uzp9xjjHgXBkc_fWnQnP8FWgcsRi6HVmjy1bVcwr_3aV0B4cgnaPWvWd1RXZIDM3Eeeq5_Y4PAmdWlVnrwKiKBwehk11RUVhSciz0qwYOoSrcwqW_ptb8lhiJ98Bq9nHjpLyjiIKN7pC6-jvGmAbArr1LtnpBvh',
      category: 'bags',
    },
    {
      id: 33,
      name: {
        en: "Men's Suit",
        ku: 'قاطی پیاوان',
      },
      price: 299.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwWX90CQlg9NhTWD24mN3KWMj2ItXGTaPXx2Tpp3DBbkv-EjzWmwzTHPevFcWt-q_vrEZiDrWJGyzfK51dwPfpk6O_M5OwJAtH66CMm3lHCBTPcrYolNmxQKEtR6cMPUcmSUI6PsOE07pqBueryfWIQTSIw0cUUw4CfZHzJhWDRqrrJeVcWA64LrMSZeB6aLguyyeGYKo5ZCyd35kkeX6IYuoSrpCWyx193JZx57t_MW-Yorx9TOT9T-y4XMYupFOYwuOd3zz02jLu',
      category: 'clothes',
    },
    {
      id: 34,
      name: {
        en: "Women's Suit",
        ku: 'قاطی ژنان',
      },
      price: 249.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA27G2AzxoYwzWHkPskVHyNNLOG_g-lt8W-vOc3nDzE6OFrxHC5KLycuTFDyG1eMgapw1tT0QTxP5zh71W8EF2iTuzFCo74sWWYJctqaZ6tAS5L6L5T3uw9mYkPJk6iL_jfVEBB9bLQbdTp1aa4udNsI2K0JDRAGRDpn0jFgTKHh7LIr8pMBP8XnAalfhcrCKovFlK4P4dZiyqtB7wIn-DbJ6mXgh6nn_XYzw79UUg3XQRGrpcxueGcB_EnMRwXvLunUr2rN1A0T3aL',
      category: 'clothes',
    },
    {
      id: 35,
      name: {
        en: "Men's Watch",
        ku: 'کاتژمێری پیاوان',
      },
      price: 199.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2ZAeaSSjOyKGUftig5kxtSW67Vd5u4am-NYnkFXv9LEwGPRo3wXSp20lq8PJ1aho0kXX8DnphgcwAfRm7iDITmZrbPijk_SH59WLNtHJNfyecXn8aVNnWdl9M8dMpbnDsk5Zkszxw22TrQZovsfIo3IBgyeL0-c2WfUAgnWFNuGoL8wxj5CR4z26hr-dzmvJZs5D-t7Qsr4dbxg7Fj28kIWzK2UiNzQg5PUjT9eSjXFpablnvZfTmAOjYJA87ONFPqymcD5OVnrur',
      category: 'accessories',
    },
    {
      id: 36,
      name: {
        en: "Women's Watch",
        ku: 'کاتژمێری ژنان',
      },
      price: 179.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVCUU3Z6f3YG2nvT-g_h_g7Y1kKH9zHfXJBZbNZGDPpHfhf_5qUHhJrEZgRKG7en3dSFKDYfK4IH7CJH4Oen-b6O_FEm17RLpwPH0GT3n6YtFXpWs7vmrUcGycLuvE1x6nr02xwlh8-2AeLd7iM2okfoNDIcNqQN2qTufROEeAjLWIsDdpQe1vjTma3zjL_MBCANbWRj1ra0wPaKIXRCmWuvQmp0H7WCWdi_tvt_OQyQil-13TYSSlYx1zlsV49NphrZJiZHp7PdoY',
      category: 'accessories',
    },
    {
      id: 37,
      name: {
        en: "Men's Leather Briefcase",
        ku: 'جانتای کاری پێستی پیاوان',
      },
      price: 149.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBu0C4rnAo1qvDeRXL0M1VMoAxmemeqQr9nU8xh2O9KadGBgk-8ZTmfkFBtObzmSjJxrzFLDGhpXtC5Ij3Bt1qKtLOFugR2XPB-E_-kIuD9q_uq8XnNvEbCSfnkeQ8rl0BDnnkKxJxRphFQ0T06SSpfy2GuhN7RR2h-7oA009-ToAi8eHCVkL555awFjjvhjphjHrSX2LT48EwJcJj_cijEJpzvqKEZ5GcryZ-6OH2lXAfSP8zppfu8tQKwXBNZhECHeG8l7sUo0c3l',
      category: 'bags',
    },
    {
      id: 38,
      name: {
        en: "Women's Designer Handbag",
        ku: 'جانتای دیزاینەری ژنان',
      },
      price: 229.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1sRbT7dnZXnzgysjgPESsk-ecGfXvGS7Z7G-PoXn5CK8B8u8vLw3gVDPsx6ZZnZp0b_bLXM2c8H7xJHw_I9KIrHbqtZG_O3ewlZXcEKtBFf-mt8Jbrzcjdbb7NAFj1V9Lx4MsV9z6Z-AzbBbO2yo3hShZmebnjSk0L1GhhgcC9LyEuO2zR2oOjhpVkYaX4GU1UFhZLvP_H5UFPMkeuiwPXGda4Cqm6oaNMcZukR_1jR7KntfTI_DAloy5OHeeo2Zs-KOp8ooPn0WA',
      category: 'bags',
    },
    {
      id: 39,
      name: {
        en: "Men's Dress Shirt",
        ku: 'قەمیسی ڕەسمی پیاوان',
      },
      price: 59.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWpZAzLZV5XHq0OSLS7djc60u5UVa7LtRhiGuGmN-OvXkjG3PV74piTNxDuGU5nIRAPUTqZ3-vRbRxRvKaGJ8Bt0GXmpIQVxeoNRnYadJMg2duptiVl102OXUHG1PyqG2-5hz7W6z03o3wSGHPvm6uzaB6-ezEf2HErWWVrLPVarSYDFMpiYLGsAcYa8ovZx9F5C1RBi_E9FImc37c086J6ApUjg1Y1_QXWdyd37V1vjoPLijdRSOIib2uyKk6M_r03yF3rbC1B9M3',
      category: 'clothes',
    },
    {
      id: 42,
      name: {
        en: "Women's Ballet Flats",
        ku: 'فڵاتی بالێی ژنان',
      },
      price: 69.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgQ1KIhR1z5-mD3_jFwsf6eQIRJPwSssbykdSE2rG99pjm55RUGMksB-GXtD1s4O1l-uzQXkqlKkTCQmap0hjuBD4aekqyrX1VI3K4tQowxu9lrA4EJeqpHg7NL5DbPEWOSQp3iBxYo73yP91Qu_xqs3S2Y4XtNSf-QZ6lLTi2CLkAccnMUnVJXVnj6TXYAPLssrAIoc_grVPvqb16sY_-GyOAoyEfZQsS6Xbn2r6S11IPYLtgG2rULYbEY0HpG3BMcMVwRc8rA8bc',
      category: 'shoes',
    },
    {
      id: 43,
      name: {
        en: "Men's Athletic Trainers",
        ku: 'ڕاهێنەری وەرزشی پیاوان',
      },
      price: 89.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBr94-KMkdUAQgLBMPzhEV4dU1DW0SPdoZ0W7HjpdYsTIcjRPqQxbXGGIme-5Ww93LxGmfPYTLGVsuXLM7FzxOXfSkGk2KoynoyyunIQqh56MvXzEStnRYT8vONQ8fLAKEoaPKcVcN2J7QYKhnu_omJ87mI5a_VvWtlWoxC4HJiknjctEvKp4pCVssZZC-UujeS6ivbl_UipTgp5wijCMgU1nSCrxp5nyitElr4i9USwWD1duwa-41wnzCK8LP9SMU01sWpCsnc8tmd',
      category: 'shoes',
    },
    {
      id: 44,
      name: {
        en: "Women's Fitness Trainers",
        ku: 'ڕاهێنەری لەشجوانی ژنان',
      },
      price: 79.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGtU8PTWGoJXwODjhcVlNia9j3KW9UiqWd_JbFlvEycWI0mwBvcGwIpFVx3MlcshM7zkjvUqT8F0ye2K19JNI4WGbmlXVNFYDvbFzMKdk2LjilPgODf99uGIAZ3SciaN5_IuOm_Q_b-Rw0kkHeMfxn6NaIZ9hN0PVSB4ADnHFZqtRd84mqtkkTy2J2HHMP0oc87YU51y9est42eieuuXjlhYwcoRu_bH-YwGb8OewwuB8DuHQ186lumVaOgUFtMUJ3UMdhEEmBsjNX',
      category: 'shoes',
    },
    {
      id: 45,
      name: {
        en: 'Ceramic Coffee Cup',
        ku: 'کوپی قاوەی سیرامیک',
      },
      price: 19.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5w8Sg0qDZ-im2zQlMGd1MEz0kqGIE-x0wBnlBld7XRm55X87ItSX-DhDCHZ8WbzHSGS0vbVgUydeziGDYLoraMtDcHyxJSJEHy4hhjVGrXPaRXpTSV-eC-ruY0dcNP3xnfnp5HxeQLqwpNAjTn89PVH-S1thonq_jpnc7YV4efjAPw7ZwwX5pUWArPdViUUxKeneIE7TS3zgWivx1Mak6qqn-uHStM0yvvqJQrPOGAE48cL_YFJ4XibzaS1OI5iTuT6ZS0eQcP7ii',
      category: 'accessories',
    },
    {
      id: 46,
      name: {
        en: 'Travel Mug',
        ku: 'ماگی گەشت',
      },
      price: 24.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQqIrMAKGK7eZkNhRy3FeWDg9N0QvUAFligPcvJoZ8BX0ZKYCXU84uvkmGsLI72rRSFZgkavZu-kNn-Oa7_zF9HZj_UUfbuM0wmHFP3yRcgQzzk63_uVXz_Q6RDUItgeQ4N1-Chblr3U_Q0kK1cA1IhgGMC_38aqs2o6IJFxMgHbemPmhrugFPvwkeUTBVdmiOKyC-4jW7xPWwaeK-TQx0Ypfzth-Pf130_RJ0Zak6lvjTfDsd4I8of0iPRIPUHm8vH_1ZbBc3y7E0',
      category: 'accessories',
    },
    {
      id: 47,
      name: {
        en: "Men's Sunglasses",
        ku: 'چاوێلکەی خۆری پیاوان',
      },
      price: 49.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8pmf-0rxNeARWc_UMQFj-FigsMsDQvOITwpNTgEoc4ekaBKXFpJQBVW-LYLyMahJtwy5FWCDKg99n6AogSnaBwj0fD4KNW43iObMOhbKxwxNtFX-FvnziycHM_nhj7rMl2x2raALXIS8MIwdQq64Y6RhZvQnWmbxEjr0qiliRMM7qi1XG0pUfsOSOA-mE8dzd70ZNGb0Y_79fM6gncj6H5Zck7X3nWD0oFEOBajaSuvbRjAjas0kTtatLnHdTM77LC0cFTrFZ8b5Q',
      category: 'accessories',
    },
    {
      id: 48,
      name: {
        en: "Women's Fashion Scarf",
        ku: 'شەاڵی مۆدەی ژنان',
      },
      price: 39.99,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUx72pGCnDKARUkwxY8atX-hl667iA9LC2sYfPccTD9pV2iTplrRDbmv06lUzvvuDVY4oH19Ta1DinvPgeAGXEdIHkG8Eh8k9Ku7VyZ4FAIHPjJZfPFlzoWVSANKuI9KC4bF10QFBcskRUda9Tz6u_syMzhMkVQeOR9o7vZtH48aHAZ1aEaOhgHZ2jgfW43L_bISfqkJYY8CebR8BD3HUWo7m8L_eM_21WJQLwtUN_AWdwR2xALG1bTiFxe4bHrHEI5gXHUXgbYu5H',
      category: 'accessories',
    },
  ];
  
  export default productsData;